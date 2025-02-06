import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/results/ProductCard";
import { getRecommendations } from "@/utils/recommendationLogic";
import type { Answer } from "@/components/quiz/types";
import { Badge } from "@/components/ui/badge";
import { Info, Loader2 } from "lucide-react";
import type { ProductFeedback } from "@/components/results/FeedbackForm";
import { feedbackStorage } from "@/utils/feedback/feedbackStorage";
import { toast } from "sonner";
import { validateRecommendationSystem } from "@/utils/recommendation/testing/validationTests";
import { supabase } from "@/integrations/supabase/client";
import type { Json } from "@/integrations/supabase/types";
import type { Product } from "@/components/results/ProductCard";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = (location.state?.answers || []) as Answer[];
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const loadRecommendations = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (process.env.NODE_ENV === 'development') {
          await validateRecommendationSystem();
        }

        if (answers.length === 0) {
          throw new Error("Aucune réponse trouvée. Veuillez refaire le questionnaire.");
        }

        const recs = await getRecommendations(answers);
        
        if (recs.length === 0) {
          throw new Error("Aucune recommandation trouvée pour vos critères.");
        }

        if (recs.length < 4) {
          console.warn("Moins de 4 recommandations trouvées:", recs.length);
          toast.warning("Certaines recommandations peuvent être manquantes.");
        }

        setRecommendations(recs);
        setUniqueCategories([...new Set(recs.flatMap(p => p.categories))]);
      } catch (error) {
        console.error("Erreur lors du chargement des recommandations:", error);
        setError(error instanceof Error ? error.message : "Une erreur est survenue");
        toast.error("Erreur lors du chargement des recommandations");
      } finally {
        setIsLoading(false);
      }
    };

    loadRecommendations();
  }, [answers]);

  const saveUserResponses = async () => {
    try {
      const jsonResponses = JSON.parse(JSON.stringify(answers)) as Json;
      
      const { data: userResponse, error: userResponseError } = await supabase
        .from('user_responses')
        .insert({
          responses: jsonResponses
        })
        .select()
        .single();

      if (userResponseError) throw userResponseError;
      return userResponse.id;
    } catch (error) {
      console.error('Error saving user responses:', error);
      toast.error('Impossible de sauvegarder vos réponses');
      return null;
    }
  };

  const getProductUuid = async (productName: string) => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('id')
        .eq('name', productName)
        .maybeSingle();

      if (error) throw error;
      return data?.id;
    } catch (error) {
      console.error(`Erreur lors de la récupération de l'UUID pour ${productName}:`, error);
      return null;
    }
  };

  const saveRecommendations = async (userResponseId: string) => {
    try {
      const productUuidPromises = recommendations.map(r => getProductUuid(r.name));
      const productUuids = await Promise.all(productUuidPromises);
      const validProductUuids = productUuids.filter((id): id is string => id !== null);
      
      if (validProductUuids.length === 0) {
        throw new Error('Aucun UUID de produit valide trouvé');
      }

      // Convert primary goal and health concerns to proper types
      const primaryGoal = String(answers.find(a => a.questionId === 3)?.answers[0] || '');
      const healthConcerns = (answers.find(a => a.questionId === 4)?.answers || []).map(String);

      const recommendationData = {
        user_response_id: userResponseId,
        product_ids: validProductUuids,
        confidence_scores: recommendations.map(r => r.confidenceLevel || 0),
        primary_goal: primaryGoal,
        health_concerns: healthConcerns
      };

      const { error: recommendationsError } = await supabase
        .from('recommendations')
        .insert(recommendationData);

      if (recommendationsError) throw recommendationsError;
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des recommandations:', error);
      toast.error('Impossible de sauvegarder les recommandations');
    }
  };

  const handleFeedbackSubmit = async (feedback: ProductFeedback) => {
    try {
      const product = recommendations.find(p => p.id === feedback.productId);
      const productUuid = await getProductUuid(product?.name || '');
      
      if (!productUuid) {
        throw new Error('UUID du produit non trouvé');
      }

      const { error: feedbackError } = await supabase
        .from('feedback')
        .insert({
          product_id: productUuid,
          rating: feedback.rating,
          is_helpful: feedback.isHelpful,
          suggestion: feedback.additionalFeedback
        });

      if (feedbackError) throw feedbackError;

      feedbackStorage.saveFeedback({
        ...feedback,
        timestamp: Date.now()
      });
      
      toast.success(`Merci pour votre avis sur ${product?.name}!`);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde du feedback:', error);
      toast.error('Impossible de sauvegarder votre avis');
    }
  };

  useEffect(() => {
    const saveData = async () => {
      if (answers.length > 0 && recommendations.length > 0) {
        const userResponseId = await saveUserResponses();
        if (userResponseId) {
          await saveRecommendations(userResponseId);
        }
      }
    };
    saveData();
  }, [answers, recommendations]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="w-8 h-8 animate-spin text-amber-600 mx-auto" />
          <p className="text-amber-800">Chargement de vos recommandations...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center space-y-4 p-6">
          <p className="text-red-600">{error}</p>
          <Button
            onClick={() => navigate("/")}
            className="bg-amber-900 text-white hover:bg-amber-800"
          >
            Retour au questionnaire
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif text-amber-900">
            Voici ce que nous avons choisi pour vous
          </h1>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto">
            En fonction de vos réponses, nous avons sélectionné ces produits naturels qui correspondent le mieux à vos besoins
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-start gap-3 mb-4">
            <Info className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-amber-900 mb-2">
                Votre bien-être, notre passion au quotidien
              </h3>
              <p className="text-amber-700 mb-4">
                Avec amour et attention, nous avons sélectionné pour vous une gamme de produits naturels qui s'harmonisent parfaitement. Chaque produit a été choisi avec soin pour vous accompagner vers une santé rayonnante et équilibrée.
              </p>
              <div className="flex flex-wrap gap-2">
                {uniqueCategories.map((category) => (
                  <Badge 
                    key={category}
                    variant="secondary"
                    className="bg-amber-100 text-amber-800 hover:bg-amber-200"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              onFeedbackSubmit={handleFeedbackSubmit}
            />
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <Button
            onClick={() => navigate("/")}
            className="bg-amber-900 text-white hover:bg-amber-800"
          >
            Refaire le questionnaire
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;