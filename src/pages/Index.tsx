import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('name');
      
      if (error) throw error;
      return data;
    }
  });

  return (
    <div 
      className="min-h-screen flex flex-col items-center p-4 relative overflow-hidden bg-gradient-to-br animate-gradient-shift"
      style={{
        backgroundImage: 'linear-gradient(-45deg, #E4D780, #E8DB85, #E4D780, #EAE090)',
        backgroundSize: '400% 400%'
      }}
    >
      {/* Animated yellow particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              backgroundColor: `rgba(228, 215, 128, ${Math.random() * 0.5 + 0.2})`,
              borderRadius: '50%',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`
            }}
          />
        ))}
      </div>

      <Card className="max-w-4xl w-full bg-white/80 backdrop-blur-sm p-8 space-y-8 relative z-10 shadow-xl hover:shadow-2xl transition-all duration-500 mb-8">
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

      {isLoading ? (
        <div className="flex items-center justify-center p-8">
          <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
          {products?.map((product) => (
            <Card key={product.id} className="bg-white/90 p-6 hover:shadow-lg transition-shadow">
              <div className="aspect-square w-full mb-4 bg-amber-50 rounded-lg overflow-hidden">
                <img 
                  src={product.image_url || '/placeholder.svg'} 
                  alt={product.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">{product.name}</h3>
              <p className="text-amber-700 mb-4">{product.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {product.categories.map((category: string) => (
                  <span 
                    key={category} 
                    className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-sm"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <Button 
                asChild
                variant="default" 
                className="w-full bg-amber-900 hover:bg-amber-800 text-white"
              >
                <a 
                  href={product.product_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Voir le produit
                </a>
              </Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;