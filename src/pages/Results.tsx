import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/results/ProductCard";
import { getRecommendations } from "@/utils/recommendationLogic";
import type { Answer } from "@/components/quiz/types";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = (location.state?.answers || []) as Answer[];
  
  const recommendations = getRecommendations(answers);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-700 via-amber-500 to-amber-300">
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-serif text-white">
            Basé sur vos réponses, voici nos meilleures recommandations pour vous
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <Button
            onClick={() => navigate("/")}
            className="bg-white text-[#0f172a] hover:bg-white/90"
          >
            Recommencer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;