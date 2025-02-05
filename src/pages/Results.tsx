import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/results/ProductCard";
import { getRecommendations } from "@/utils/recommendationLogic";
import type { Answer } from "@/components/quiz/types";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";
import type { ProductFeedback } from "@/components/results/FeedbackForm";
import { feedbackStorage } from "@/utils/feedback/feedbackStorage";
import { toast } from "sonner";
import { validateRecommendationSystem } from "@/utils/recommendation/testing/validationTests";
import { supabase } from "@/integrations/supabase/client";
import type { Json } from "@/integrations/supabase/types";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = (location.state?.answers || []) as Answer[];
  
  if (process.env.NODE_ENV === 'development') {
    validateRecommendationSystem();
  }

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
      toast.error('Failed to save your responses');
      return null;
    }
  };
  
  const recommendations = getRecommendations(answers);
  const uniqueCategories = [...new Set(recommendations.flatMap(p => p.categories))];

  // Function to get product UUID from database
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
      console.error(`Error getting UUID for product ${productName}:`, error);
      return null;
    }
  };

  const saveRecommendations = async (userResponseId: string) => {
    try {
      // Get UUIDs for all recommended products
      const productUuidPromises = recommendations.map(r => getProductUuid(r.name));
      const productUuids = await Promise.all(productUuidPromises);
      
      // Filter out any null values from failed UUID lookups
      const validProductUuids = productUuids.filter((id): id is string => id !== null);
      
      if (validProductUuids.length === 0) {
        throw new Error('No valid product UUIDs found');
      }

      const recommendationData = {
        user_response_id: userResponseId,
        product_ids: validProductUuids,
        confidence_scores: recommendations.map(r => r.confidenceLevel || 0)
      };

      const { error: recommendationsError } = await supabase
        .from('recommendations')
        .insert(recommendationData);

      if (recommendationsError) throw recommendationsError;
    } catch (error) {
      console.error('Error saving recommendations:', error);
      toast.error('Failed to save recommendations');
    }
  };

  const handleFeedbackSubmit = async (feedback: ProductFeedback) => {
    try {
      const productUuid = await getProductUuid(recommendations.find(p => p.id === feedback.productId)?.name || '');
      
      if (!productUuid) {
        throw new Error('Product UUID not found');
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
      
      const product = recommendations.find(p => p.id === feedback.productId);
      toast.success(`Thank you for your feedback on ${product?.name}!`);
      
      console.log("Feedback saved:", {
        product: product?.name,
        rating: feedback.rating,
        isHelpful: feedback.isHelpful,
        additionalFeedback: feedback.additionalFeedback
      });
    } catch (error) {
      console.error('Error saving feedback:', error);
      toast.error('Failed to save your feedback');
    }
  };

  React.useEffect(() => {
    const saveData = async () => {
      if (answers.length > 0) {
        const userResponseId = await saveUserResponses();
        if (userResponseId && recommendations.length > 0) {
          await saveRecommendations(userResponseId);
        }
      }
    };
    saveData();
  }, [answers, recommendations]);

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
                Une approche complète pour votre bien-être
              </h3>
              <p className="text-amber-700 mb-4">
                Nous avons choisi des produits qui se complètent pour prendre soin de vous de manière naturelle et équilibrée.
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