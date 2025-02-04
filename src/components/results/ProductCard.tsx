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
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="mt-2 font-bold">Confiance: {product.confidenceLevel}%</p>
      <a href={product.productUrl} className="text-blue-500 hover:underline mt-2 block">En savoir plus</a>
    </div>
  );
};
