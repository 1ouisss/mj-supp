
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              opacity: 0.4
            }}
          >
            🌿
          </div>
        ))}
      </div>

      <Card className="max-w-2xl w-full bg-white/90 backdrop-blur-sm p-8 space-y-8 relative z-10 shadow-xl hover:shadow-2xl transition-all duration-500">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-50 mb-4">
            <Sparkles className="w-8 h-8 text-amber-800" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 font-serif hover:scale-105 transition-transform duration-300">
            Maison Jacynthe Présente MJ Nutra
          </h1>
          <p className="text-xl text-gray-600 font-serif italic">
            Découvrez les produits naturels adaptés à vos besoins
          </p>
          <Button 
            onClick={() => navigate("/quiz")}
            className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            ANALYSE
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Index;
