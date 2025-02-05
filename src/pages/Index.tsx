import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden"
      style={{
        background: 'linear-gradient(-45deg, #E4D780, #E8DB85, #E4D780, #EAE090)',
        backgroundSize: '400% 400%'
      }}
    >
      <div className="absolute inset-0 animate-gradient-shift" 
        style={{
          background: 'linear-gradient(-45deg, #E4D780, #E8DB85, #E4D780, #EAE090)',
          backgroundSize: '400% 400%',
          opacity: 0.95
        }}
      />
      
      {/* Large smoke particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={`smoke-large-${i}`}
            className="absolute animate-smoke"
            style={{
              left: `${Math.random() * 100}%`,
              top: '80%',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(228,215,128,0.6) 0%, rgba(228,215,128,0) 70%)',
              animationDelay: `${i * 0.4}s`,
              filter: 'blur(8px)'
            }}
          />
        ))}
      </div>

      {/* Small floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '8px',
              height: '8px',
              background: 'radial-gradient(circle, rgba(228,215,128,1) 0%, rgba(228,215,128,0) 100%)',
              animationDelay: `${i * 0.2}s`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>
      
      <Card className="max-w-2xl w-full bg-white/80 backdrop-blur-sm p-8 space-y-8 relative z-10 shadow-xl">
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