import { Button } from "@/components/ui/button";

interface SingleChoiceQuestionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
}

export const SingleChoiceQuestion = ({ question, options, onAnswer }: SingleChoiceQuestionProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl sm:text-2xl font-medium text-center">
        {question}
      </h2>
      <div className="grid gap-4">
        {options.map((option) => (
          <Button
            key={option}
            onClick={() => onAnswer(option)}
            variant="outline"
            className="w-full py-4 sm:py-6 text-base sm:text-lg"
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};