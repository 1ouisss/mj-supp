import { Slider } from "@/components/ui/slider";

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
        <div className="px-4 py-4">
          <Slider
            min={min}
            max={max}
            step={step}
            value={[value]}
            onValueChange={([newValue]) => onChange(newValue)}
            className="w-full"
          />
        </div>
        <div className="text-center text-lg font-medium">
          {value} heures
        </div>
      </div>
    </div>
  );
};