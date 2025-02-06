import { ProductCategory } from "@/utils/products/productTypes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { FeedbackForm, ProductFeedback } from "./FeedbackForm";
import { useState } from "react";

export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  expectedResults: string;
  recommendationReason: string;
  dietaryInfo: string;
  confidenceLevel: number;
  productUrl: string;
  categories: ProductCategory[];
  therapeuticClaims?: string[];
  score?: number;
}

interface ProductCardProps {
  product: Product;
  onFeedbackSubmit?: (feedback: ProductFeedback) => void;
}

// Updated local image mapping
const LOCAL_PRODUCT_IMAGES: Record<string, string> = {
  "Focus": "/lovable-uploads/08b3afe7-d173-4bc6-b68b-575f171df2ff.png",
  "La Totale": "/lovable-uploads/81fe24a0-70fe-4718-b8e3-db356eb4cd93.png",
  "Complexe B": "/lovable-uploads/9e2a27a2-80a8-45c6-a120-57d6f9250958.png"
};

const PLACEHOLDER_IMAGES = [
  "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
  "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
  "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
];

const getRandomPlaceholder = () => {
  const randomIndex = Math.floor(Math.random() * PLACEHOLDER_IMAGES.length);
  return PLACEHOLDER_IMAGES[randomIndex];
};

const translateCategory = (category: ProductCategory): string => {
  const translations: Record<ProductCategory, string> = {
    relaxation: "Relaxation",
    sommeil: "Sommeil",
    stress: "Stress",
    digestif: "Digestif",
    santé_générale: "Santé générale",
    cerveau: "Cerveau",
    concentration: "Concentration",
    énergie: "Énergie",
    santé_cheveux: "Santé des cheveux",
    peau: "Peau",
    immunité: "Immunité",
    muscles: "Muscles",
    articulations: "Articulations",
    ongles: "Ongles",
    hormones: "Hormones",
    thyroïde: "Thyroïde",
    santé_femme: "Santé des femmes",
    santé_homme: "Santé des hommes",
    migraine: "Migraine",
    douleur: "Douleur",
    guérison: "Guérison",
    topique: "Topique",
    saisonnier: "Saisonnier",
    gorge: "Gorge",
    essentiel: "Essentiel",
    santé_osseuse: "Santé osseuse",
    enfants: "Enfants",
    métabolisme: "Métabolisme",
    santé_cardiaque: "Santé cardiaque",
    court_terme: "Court terme",
    long_terme: "Long terme",
    vitalité: "Vitalité",
    récupération: "Récupération",
    minéraux: "Minéraux",
    antioxydant: "Antioxydant"
  };
  return translations[category] || category;
};

export const ProductCard = ({ product, onFeedbackSubmit }: ProductCardProps) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [imageSrc, setImageSrc] = useState(() => {
    // Check if we have a local image for this product
    const localImage = LOCAL_PRODUCT_IMAGES[product.name];
    return localImage || product.imageUrl;
  });

  const handleImageError = () => {
    console.warn(`Image not found for product: ${product.name}, using placeholder`);
    setImageSrc(getRandomPlaceholder());
  };

  return (
    <Card className="h-full flex flex-col bg-white overflow-hidden hover:shadow-lg transition-shadow border-amber-100">
      <CardHeader className="p-0">
        <div className="aspect-square w-full overflow-hidden bg-amber-50">
          <img 
            src={imageSrc} 
            alt={product.name} 
            className="w-full h-full object-contain p-4"
            loading="lazy"
            onError={handleImageError}
          />
        </div>
      </CardHeader>

      <CardContent className="flex-grow p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-xl font-semibold text-amber-900">{product.name}</h2>
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-full">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-sm font-medium text-amber-700">
              {product.confidenceLevel}%
            </span>
          </div>
        </div>
        
        <p className="text-amber-700">{product.description}</p>
        
        <div className="space-y-2">
          <p className="font-medium text-amber-900">Résultats attendus:</p>
          <p className="text-amber-700">{product.expectedResults}</p>
        </div>

        {product.recommendationReason && (
          <div className="space-y-2">
            <p className="font-medium text-amber-900">Pourquoi ce produit est recommandé:</p>
            <p className="text-amber-700">{product.recommendationReason}</p>
          </div>
        )}

        {product.therapeuticClaims && product.therapeuticClaims.length > 0 && (
          <div className="space-y-2">
            <p className="font-medium text-amber-900">Allégations thérapeutiques:</p>
            <ul className="list-disc pl-4 text-amber-700">
              {product.therapeuticClaims.map((claim, index) => (
                <li key={index}>{claim}</li>
              ))}
            </ul>
          </div>
        )}

        {product.dietaryInfo && (
          <div className="space-y-2">
            <p className="font-medium text-amber-900">Informations diététiques:</p>
            <p className="text-amber-700">{product.dietaryInfo}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-2">
          {product.categories.map((category) => (
            <Badge 
              key={category}
              variant="secondary"
              className="bg-amber-100 text-amber-800 hover:bg-amber-200"
            >
              {translateCategory(category)}
            </Badge>
          ))}
        </div>

        {showFeedback ? (
          <FeedbackForm
            product={product}
            onFeedbackSubmit={(feedback) => {
              onFeedbackSubmit?.(feedback);
              setShowFeedback(false);
            }}
          />
        ) : (
          <Button
            variant="outline"
            onClick={() => setShowFeedback(true)}
            className="w-full mt-4 border-amber-200 text-amber-800 hover:bg-amber-50"
          >
            Rate this recommendation
          </Button>
        )}
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button 
          asChild
          variant="default"
          className="w-full bg-amber-900 hover:bg-amber-800 text-white"
        >
          <a 
            href={product.productUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            En savoir plus
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};