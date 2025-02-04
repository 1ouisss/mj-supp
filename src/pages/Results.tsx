import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/results/ProductCard";
import { getRecommendations } from "@/utils/recommendationLogic";
import type { Answer } from "@/components/quiz/types";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = (location.state?.answers || []) as Answer[];
  
  const recommendations = getRecommendations(answers);
  const uniqueCategories = [...new Set(recommendations.flatMap(p => p.categories))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif text-amber-900">
            Vos recommandations personnalisées
          </h1>
          <p className="text-lg text-amber-800 max-w-2xl mx-auto">
            Basé sur vos réponses, nous avons sélectionné ces produits spécifiquement pour vous
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <div className="flex items-start gap-3 mb-4">
            <Info className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-medium text-amber-900 mb-2">
                Recommandations diversifiées
              </h3>
              <p className="text-amber-700 mb-4">
                Nos suggestions couvrent plusieurs aspects de votre santé pour une approche holistique.
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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <Button
            onClick={() => navigate("/")}
            className="bg-amber-900 text-white hover:bg-amber-800"
          >
            Recommencer le quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;