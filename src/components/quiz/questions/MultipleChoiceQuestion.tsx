import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface MultipleChoiceQuestionProps {
  question: string;
  options: string[];
  selectedAnswers: string[];
  onAnswerChange: (answer: string, checked: boolean) => void;
  onNext: () => void;
  onBack: () => void;
}

export const MultipleChoiceQuestion = ({
  question,
  options,
  selectedAnswers,
  onAnswerChange,
  onNext,
  onBack,
}: MultipleChoiceQuestionProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl sm:text-2xl font-medium text-center">
        {question}
      </h2>
      <div className="space-y-4">
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-3">
            <Checkbox
              id={option}
              checked={selectedAnswers.includes(option)}
              onCheckedChange={(checked) => 
                onAnswerChange(option, checked as boolean)
              }
            />
            <label
              htmlFor={option}
              className="text-base sm:text-lg cursor-pointer"
            >
              {option}
            </label>
          </div>
        ))}
        <div className="flex justify-between mt-6">
          <Button onClick={onBack} variant="outline">
            Retour
          </Button>
          <Button onClick={onNext} disabled={selectedAnswers.length === 0}>
            Suivant
          </Button>
        </div>
      </div>
    </div>
  );
};