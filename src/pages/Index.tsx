
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Sun, ChevronRight, Heart, Award } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br animate-gradient-shift"
      style={{
        backgroundImage: 'linear-gradient(-45deg, #F1EDD0, #E4D780, #E8DB85, #EAE090)',
        backgroundSize: '400% 400%'
      }}
    >
      {/* Animated herb elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              opacity: 0.7,
              fontSize: `${Math.random() * 20 + 20}px`,
              transform: `rotate(${Math.random() * 180}deg)`
            }}
          >
            {['🌿', '🍃', '🌱', '☘️', '🍀'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="container max-w-6xl mx-auto z-10 grid md:grid-cols-2 gap-8 items-center py-8">
        {/* Left side - Hero content */}
        <div className="flex flex-col space-y-6 text-left">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-800/10 text-amber-900 text-sm font-medium mb-2">
            <Award className="h-4 w-4 mr-2" />
            Produits naturels de qualité
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
            Maison Jacynthe Présente <span className="text-amber-800 block">MJ Nutra</span>
          </h1>
          
          <p className="text-xl text-gray-700 max-w-md">
            Découvrez des produits naturels adaptés à vos besoins de santé, formulés avec des ingrédients de la plus haute qualité.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Button 
              onClick={() => navigate("/quiz")}
              className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300 shadow-md"
            >
              COMMENCER L'ANALYSE
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              className="border-amber-700 text-amber-900 hover:bg-amber-50 px-6 py-6 text-lg rounded-full"
              onClick={() => window.open("https://maisonjacynthe.ca", "_blank")}
            >
              En savoir plus
            </Button>
          </div>
        </div>
        
        {/* Right side - Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FeatureCard 
            icon={<Leaf className="h-6 w-6 text-green-600" />}
            title="Naturel"
            description="Des formules respectueuses de votre santé et de l'environnement"
          />
          
          <FeatureCard 
            icon={<Heart className="h-6 w-6 text-rose-600" />}
            title="Bien-être"
            description="Des solutions adaptées à vos besoins spécifiques"
          />
          
          <FeatureCard 
            icon={<Sun className="h-6 w-6 text-amber-500" />}
            title="Vitalité"
            description="Des ingrédients sélectionnés pour leur efficacité"
          />
          
          <FeatureCard 
            icon={<Award className="h-6 w-6 text-blue-600" />}
            title="Qualité"
            description="Des produits testés et approuvés"
          />
        </div>
      </div>
      
      {/* Testimonial section */}
      <Card className="mt-8 max-w-2xl w-full bg-white/80 backdrop-blur-sm p-6 shadow-lg border-0 rounded-2xl">
        <CardContent className="text-center py-4">
          <p className="text-lg text-gray-700 italic">
            "Notre mission est de vous offrir des solutions naturelles pour préserver votre santé au quotidien."
          </p>
          <p className="text-amber-800 font-medium mt-2">Jacynthe René, Fondatrice</p>
        </CardContent>
      </Card>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <Card className="bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 border-0 shadow-sm hover:shadow-md rounded-xl overflow-hidden group">
    <CardContent className="p-5">
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-amber-50 rounded-lg group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-amber-900 text-lg">{title}</h3>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default Index;
