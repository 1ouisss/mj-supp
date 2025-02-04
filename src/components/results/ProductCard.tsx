import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="h-full flex flex-col bg-white rounded-3xl overflow-hidden">
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="space-y-2">
        <h3 className="text-xl font-bold">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">
            Résultats attendus:
          </h4>
          <p className="text-sm font-semibold">{product.expectedResults}</p>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">
            Pourquoi ce produit est recommandé:
          </h4>
          <p className="text-sm">{product.recommendationReason}</p>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">
            Informations diététiques:
          </h4>
          <p className="text-sm">{product.dietaryInfo}</p>
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">
            Confiance de la recommandation:
          </h4>
          <p className="text-sm font-semibold">{product.confidenceLevel}%</p>
        </div>
        <Button
          className="w-full bg-[#1A1F2C] hover:bg-[#2A2F3C] text-white"
          onClick={() => window.open(product.productUrl, "_blank")}
        >
          En savoir plus
        </Button>
      </CardContent>
    </Card>
  );
}