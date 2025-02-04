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
    <div className="space-y-8">
      <h2 className="text-2xl sm:text-3xl font-medium text-center">
        {question}
      </h2>
      <div className="space-y-6">
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-4 p-4 hover:bg-accent rounded-lg transition-colors">
            <Checkbox
              id={option}
              checked={selectedAnswers.includes(option)}
              onCheckedChange={(checked) => 
                onAnswerChange(option, checked as boolean)
              }
              className="h-6 w-6"
            />
            <label
              htmlFor={option}
              className="text-lg sm:text-xl cursor-pointer"
            >
              {option}
            </label>
          </div>
        ))}
        <div className="flex justify-between mt-8">
          <Button onClick={onBack} variant="outline" className="text-lg px-8 py-6">
            Retour
          </Button>
          <Button onClick={onNext} disabled={selectedAnswers.length === 0} className="text-lg px-8 py-6">
            Suivant
          </Button>
        </div>
      </div>
    </div>
  );
};