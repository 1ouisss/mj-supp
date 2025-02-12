
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br animate-gradient-shift"
      style={{
        backgroundImage: 'linear-gradient(-45deg, #E4D780, #E8DB85, #E4D780, #EAE090)',
        backgroundSize: '400% 400%'
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-smoke"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0
            }}
          >
            🌿
          </div>
        ))}
      </div>

      <Card className="max-w-2xl w-full bg-white/80 backdrop-blur-sm p-8 space-y-8 relative z-10 shadow-xl hover:shadow-2xl transition-all duration-500">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-800 hover:scale-105 transition-transform duration-300">
            Maison Jacynthe Présente MJ Nutra
          </h1>
          <p className="text-xl text-gray-600">
            Découvrez les produits naturels adaptés à vos besoins
          </p>
          <p className="text-gray-500">
            Découvrez le véritable potentiel de votre santé
          </p>
          <Button 
            onClick={() => navigate("/quiz")}
            className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300"
          >
            ANALYSE
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Index;
