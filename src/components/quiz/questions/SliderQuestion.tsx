import { Button } from "@/components/ui/button";
import { useState } from "react";

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

  const handleDecrease = () => {
    if (localValue > min) {
      const newValue = Math.max(min, localValue - step);
      setLocalValue(newValue);
      onChange(newValue);
    }
  };

  const handleIncrease = () => {
    if (localValue < max) {
      const newValue = Math.min(max, localValue + step);
      setLocalValue(newValue);
      onChange(newValue);
    }
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
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center justify-center space-x-6">
            <Button
              variant="outline"
              size="lg"
              onClick={handleDecrease}
              disabled={localValue <= min}
              className="h-14 w-14 rounded-full text-2xl font-semibold hover:scale-105 transition-transform"
            >
              -
            </Button>
            <div className="text-center min-w-[100px]">
              <span className="text-4xl font-semibold">{localValue}</span>
              <span className="text-lg ml-2">heures</span>
            </div>
            <Button
              variant="outline"
              size="lg"
              onClick={handleIncrease}
              disabled={localValue >= max}
              className="h-14 w-14 rounded-full text-2xl font-semibold hover:scale-105 transition-transform"
            >
              +
            </Button>
          </div>
          <div className="text-sm text-gray-500">
            Cliquez sur + ou - pour ajuster
          </div>
        </div>
      </div>
    </div>
  );
};