import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 relative"
      style={{
        backgroundImage: `url('/lovable-uploads/ce08bdaa-0440-4064-9cd7-04bd6a5ed979.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/20 to-yellow-500/20" />
      
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
            className="bg-black hover:bg-gray-800 text-white px-8 py-2 rounded-full text-lg"
          >
            ANALYSE
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Index;