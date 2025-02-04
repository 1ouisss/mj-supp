import { ProductCategory } from "@/utils/products/productTypes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

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
}

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="h-full flex flex-col bg-white overflow-hidden hover:shadow-lg transition-shadow border-amber-100">
      <CardHeader className="p-0">
        <div className="aspect-square w-full overflow-hidden bg-amber-50">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-contain p-4"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
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
              {category}
            </Badge>
          ))}
        </div>
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