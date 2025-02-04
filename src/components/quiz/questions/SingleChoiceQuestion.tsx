import { Button } from "@/components/ui/button";

interface SingleChoiceQuestionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
}

export const SingleChoiceQuestion = ({ question, options, onAnswer }: SingleChoiceQuestionProps) => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl sm:text-3xl font-medium text-center">
        {question}
      </h2>
      <div className="grid gap-6">
        {options.map((option) => (
          <Button
            key={option}
            onClick={() => onAnswer(option)}
            variant="outline"
            className="w-full py-6 sm:py-8 text-lg sm:text-xl hover:scale-105 transition-transform"
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};