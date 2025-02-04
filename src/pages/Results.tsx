import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getRecommendations } from "@/utils/recommendationLogic";
import type { Answer } from "@/components/quiz/types";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers = (location.state?.answers || []) as Answer[];
  
  const recommendations = getRecommendations(answers);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-700 via-amber-500 to-amber-300 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Vos Suppléments Recommandés
          </h1>
          <p className="text-lg text-white/90">
            Basé sur vos réponses, voici nos meilleures recommandations pour vous
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((product) => (
            <Card key={product.id} className="bg-white overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <p className="text-sm text-gray-600">{product.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Résultats attendus:</p>
                  <p className="text-sm text-gray-600">{product.expectedResults}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.categories.map((category) => (
                    <span 
                      key={category}
                      className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between items-center">
                <div className="text-sm font-medium">
                  Confiance: {product.confidenceLevel}%
                </div>
                <a 
                  href={product.productUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button variant="default">
                    En savoir plus
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <Button
            onClick={() => navigate("/")}
            className="bg-white text-black hover:bg-white/90"
          >
            Recommencer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;