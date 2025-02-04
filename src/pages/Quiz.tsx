import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";

const QUESTIONS = [
  {
    id: 1,
    question: "Quel est votre objectif principal de bien-être ?",
    options: [
      "Renforcer l'immunité",
      "Améliorer l'énergie",
      "Soutenir la santé cérébrale",
      "Gérer le stress",
      "Améliorer le sommeil",
      "Améliorer la digestion"
    ]
  }
];

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
    // For now, just go back to home since we only have the first page
    navigate("/");
  };

  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4"
      style={{
        backgroundImage: `url('/lovable-uploads/ce08bdaa-0440-4064-9cd7-04bd6a5ed979.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/20 to-yellow-500/20" />
      
      <Card className="max-w-2xl w-full bg-white/90 backdrop-blur-sm p-8 space-y-8 relative z-10">
        <div className="w-full">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">
              Question {currentQuestion + 1}/{QUESTIONS.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-medium text-center">
            {QUESTIONS[currentQuestion].question}
          </h2>
          
          <div className="grid gap-4">
            {QUESTIONS[currentQuestion].options.map((option) => (
              <Button
                key={option}
                onClick={() => handleAnswer(option)}
                variant="outline"
                className="w-full py-6 text-lg"
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Quiz;