import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
      style={{
        background: 'linear-gradient(-45deg, #FFD700, #FFA500, #FF8C00, #FFB347)',
        backgroundSize: '400% 400%'
      }}
    >
      <div className="absolute inset-0 animate-gradient-shift" 
        style={{
          background: 'linear-gradient(-45deg, #FFD700, #FFA500, #FF8C00, #FFB347)',
          backgroundSize: '400% 400%'
        }}
      />
      
      {/* Smoke effect overlays */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-smoke"
            style={{
              left: `${30 + i * 20}%`,
              top: '60%',
              width: '100px',
              height: '100px',
              background: 'radial-gradient(circle, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0) 70%)',
              animationDelay: `${i * 2}s`
            }}
          />
        ))}
      </div>
      
      <Card className="max-w-2xl w-full bg-white/90 backdrop-blur-sm p-8 space-y-8 relative z-10">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-light tracking-wide text-gray-800">
            Maison Jacynthe
          </h1>
          <div className="space-y-2">
            <h2 className="text-2xl font-medium text-gray-700">
              MJ Supp
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez Votre Chemin Vers le Bien-être Naturel
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Button 
            onClick={() => navigate("/quiz")}
            className="bg-black hover:bg-gray-800 text-white px-8 py-2 rounded-full text-lg animate-bounce-gentle
              transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,0,0,0.3)]"
          >
            ANALYSE
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Index;