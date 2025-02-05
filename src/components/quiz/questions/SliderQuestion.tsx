import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface SliderQuestionProps {
  question: string;
  min: number;
  max: number;
  step: number;
  value: number;
  labels?: {
    min: string;
    max: string;
  };
  onChange: (value: number) => void;
}

export const SliderQuestion = ({
  question,
  min,
  max,
  step,
  value,
  labels,
  onChange,
}: SliderQuestionProps) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    onChange(localValue);
  }, [localValue, onChange]);

  const handleDecrease = () => {
    const newValue = Math.max(min, localValue - step);
    setLocalValue(newValue);
  };

  const handleIncrease = () => {
    const newValue = Math.min(max, localValue + step);
    setLocalValue(newValue);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl sm:text-3xl font-medium text-center">
        {question}
      </h2>
      <div className="space-y-6">
        <div className="flex justify-between text-sm text-gray-600">
          {labels && (
            <>
              <span>{labels.min}</span>
              <span>{labels.max}</span>
            </>
          )}
        </div>
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center justify-center space-x-8">
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={handleDecrease}
              disabled={localValue <= min}
              className="h-16 w-16 rounded-full text-3xl font-bold hover:bg-primary hover:text-white transition-all"
            >
              -
            </Button>
            <div className="text-center bg-gray-50 px-8 py-4 rounded-lg min-w-[160px]">
              <span className="text-5xl font-bold text-primary">{localValue}</span>
              <span className="text-xl ml-3 text-gray-600">heures</span>
            </div>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={handleIncrease}
              disabled={localValue >= max}
              className="h-16 w-16 rounded-full text-3xl font-bold hover:bg-primary hover:text-white transition-all"
            >
              +
            </Button>
          </div>
          <div className="text-sm text-gray-500 text-center">
            Cliquez sur les boutons + ou - pour ajuster le nombre d'heures
          </div>
        </div>
      </div>
    </div>
  );
};