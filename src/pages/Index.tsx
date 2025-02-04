import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
      style={{
        background: 'linear-gradient(-45deg, #FFD700, #FFA500, #FFB700, #FFDB58)',
        backgroundSize: '300% 300%'
      }}
    >
      <div className="absolute inset-0 animate-gradient-shift" 
        style={{
          background: 'linear-gradient(-45deg, #FFD700, #FFA500, #FFB700, #FFDB58)',
          backgroundSize: '300% 300%',
          opacity: 0.95
        }}
      />
      
      {/* Large smoke particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={`smoke-large-${i}`}
            className="absolute animate-smoke"
            style={{
              left: `${Math.random() * 100}%`,
              top: '60%',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(255,215,0,0.8) 0%, rgba(255,215,0,0) 70%)',
              animationDelay: `${i * 0.8}s`,
              animationDuration: '8s'
            }}
          />
        ))}
      </div>

      {/* Small floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '10px',
              height: '10px',
              background: 'radial-gradient(circle, rgba(255,223,0,0.9) 0%, rgba(255,223,0,0) 100%)',
              animationDelay: `${i * 0.3}s`,
              animationDuration: '4s'
            }}
          />
        ))}
      </div>
      
      <Card className="max-w-2xl w-full bg-white/90 backdrop-blur-sm p-8 space-y-8 relative z-10">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-light tracking-wide text-gray-800">
            Maison Jacynthe
          </h1>
          <div className="space-y-2">
            <h2 className="text-3xl font-medium text-gray-700">
              MJ Supp
            </h2>
            <p className="text-2xl text-gray-600 font-light">
              Découvrez Votre Chemin Vers le Bien-être Naturel
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Button 
            onClick={() => navigate("/quiz")}
            className="bg-black hover:bg-gray-800 text-white px-12 py-3 rounded-full text-xl
              transform transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(0,0,0,0.3)]"
          >
            ANALYSE
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Index;