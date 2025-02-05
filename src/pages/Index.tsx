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
      {/* Large smoke particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={`smoke-large-${i}`}
            className="absolute animate-smoke"
            style={{
              left: `${Math.random() * 100}%`,
              top: '80%',
              width: '250px',
              height: '250px',
              background: 'radial-gradient(circle, rgba(228,215,128,0.8) 0%, rgba(228,215,128,0) 70%)',
              animationDelay: `${i * 0.3}s`,
              filter: 'blur(12px)',
              transform: 'scale(1.2)'
            }}
          />
        ))}
      </div>

      {/* Small floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '12px',
              height: '12px',
              background: 'radial-gradient(circle, rgba(228,215,128,1) 0%, rgba(228,215,128,0) 100%)',
              animationDelay: `${i * 0.2}s`,
              filter: 'blur(2px)'
            }}
          />
        ))}
      </div>
      
      <Card className="max-w-2xl w-full bg-white/80 backdrop-blur-sm p-8 space-y-8 relative z-10 shadow-xl hover:shadow-2xl transition-all duration-500">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-light tracking-wide text-gray-800 hover:scale-105 transition-transform duration-300">
            Maison Jacynthe
          </h1>
          <div className="space-y-2">
            <h2 className="text-3xl font-medium text-gray-700 hover:scale-105 transition-transform duration-300">
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
              transform transition-all duration-500 hover:scale-110 hover:shadow-[0_0_35px_rgba(228,215,128,0.5)]"
          >
            ANALYSE
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Index;