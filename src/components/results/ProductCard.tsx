import { ProductCategory } from "@/utils/products/productTypes";

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
}

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-md">
      <div className="aspect-video w-full overflow-hidden rounded-md">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg";
          }}
        />
      </div>
      <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
      <p className="text-sm text-gray-600 mt-2">{product.description}</p>
      <p className="text-sm text-gray-700 mt-2">
        <span className="font-medium">Résultats attendus:</span> {product.expectedResults}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {product.categories.map((category) => (
          <span 
            key={category}
            className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs"
          >
            {category}
          </span>
        ))}
      </div>
      <p className="mt-3 font-bold">Confiance: {product.confidenceLevel}%</p>
      <a 
        href={product.productUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 hover:underline mt-2 block"
      >
        En savoir plus
      </a>
    </div>
  );
};