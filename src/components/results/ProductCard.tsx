import { ProductCategory } from "@/utils/products/productTypes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

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
    <Card className="h-full flex flex-col bg-white overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="aspect-square w-full overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 space-y-4">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        
        <div className="space-y-2">
          <p className="font-medium">Résultats attendus:</p>
          <p className="text-gray-600">{product.expectedResults}</p>
        </div>

        {product.recommendationReason && (
          <div className="space-y-2">
            <p className="font-medium">Pourquoi ce produit est recommandé:</p>
            <p className="text-gray-600">{product.recommendationReason}</p>
          </div>
        )}

        {product.therapeuticClaims && product.therapeuticClaims.length > 0 && (
          <div className="space-y-2">
            <p className="font-medium">Allégations thérapeutiques:</p>
            <ul className="list-disc pl-4 text-gray-600">
              {product.therapeuticClaims.map((claim, index) => (
                <li key={index}>{claim}</li>
              ))}
            </ul>
          </div>
        )}

        {product.dietaryInfo && (
          <div className="space-y-2">
            <p className="font-medium">Informations diététiques:</p>
            <p className="text-gray-600">{product.dietaryInfo}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-2">
          {product.categories.map((category) => (
            <span 
              key={category}
              className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs"
            >
              {category}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center border-t">
        <div className="text-sm font-medium">
          Confiance: {product.confidenceLevel}%
        </div>
        <Button 
          asChild
          variant="default"
          className="bg-[#0f172a] hover:bg-[#1e293b] text-white"
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