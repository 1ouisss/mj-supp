
import { useState } from "react";
import { Star, ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Product } from "./ProductCard";

interface FeedbackFormProps {
  product: Product;
  onFeedbackSubmit: (feedback: ProductFeedback) => void;
}

export interface ProductFeedback {
  productId: string;
  rating: number;
  isHelpful: boolean | null;
  additionalFeedback?: string;
}

export const FeedbackForm = ({ product, onFeedbackSubmit }: FeedbackFormProps) => {
  const [rating, setRating] = useState<number>(0);
  const [isHelpful, setIsHelpful] = useState<boolean | null>(null);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (rating === 0) {
      toast.error("Veuillez attribuer une note avant de soumettre");
      return;
    }

    onFeedbackSubmit({
      productId: product.id,
      rating,
      isHelpful,
      additionalFeedback: feedback,
    });

    setSubmitted(true);
    toast.success("Merci pour votre évaluation !");
  };

  if (submitted) {
    return (
      <div className="text-center p-4 bg-amber-50 rounded-lg">
        <p className="text-amber-800">Merci pour votre évaluation !</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 p-4 bg-amber-50 rounded-lg">
      <div className="space-y-2">
        <p className="text-sm font-medium text-amber-900">Notez cette recommandation :</p>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              onClick={() => setRating(value)}
              className="focus:outline-none"
            >
              <Star
                className={`w-6 h-6 ${
                  value <= rating
                    ? "text-amber-500 fill-amber-500"
                    : "text-amber-300"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-amber-900">Cette recommandation vous a-t-elle été utile ?</p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsHelpful(true)}
            className={`${
              isHelpful === true ? "bg-amber-200" : "bg-white"
            } border-amber-300`}
          >
            <ThumbsUp className="w-4 h-4 mr-2" />
            Oui
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsHelpful(false)}
            className={`${
              isHelpful === false ? "bg-amber-200" : "bg-white"
            } border-amber-300`}
          >
            <ThumbsDown className="w-4 h-4 mr-2" />
            Non
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-amber-900">
          Quels autres produits aimeriez-vous voir ?
        </p>
        <div className="flex items-start gap-2">
          <MessageSquare className="w-4 h-4 mt-3 text-amber-500" />
          <Textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Partagez vos suggestions..."
            className="min-h-[80px] bg-white border-amber-200"
          />
        </div>
      </div>

      <Button
        onClick={handleSubmit}
        className="w-full bg-amber-600 hover:bg-amber-700 text-white"
      >
        Envoyer l'évaluation
      </Button>
    </div>
  );
};
