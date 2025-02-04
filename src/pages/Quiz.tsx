import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";

const QUESTIONS = [
  {
    id: 1,
    question: "Quel est votre objectif principal de bien-être ?",
    type: "single",
    options: [
      "Renforcer l'immunité",
      "Améliorer l'énergie",
      "Soutenir la santé cérébrale",
      "Gérer le stress",
      "Améliorer le sommeil",
      "Améliorer la digestion"
    ]
  },
  {
    id: 2,
    question: "Avez-vous des préoccupations de santé spécifiques ?",
    type: "multiple",
    options: [
      "Stress, anxiété ou sautes d'humeur",
      "Problèmes digestifs",
      "Préoccupations cardiovasculaires",
      "Problèmes de peau",
      "Déséquilibres hormonaux"
    ]
  },
  {
    id: 3,
    question: "Êtes-vous physiquement actif ou avez-vous des objectifs de fitness ?",
    type: "single",
    options: [
      "Améliorer l'endurance et la performance",
      "Aide à la récupération et réparation musculaire",
      "Pas très actif"
    ]
  }
];

type Answer = {
  questionId: number;
  answers: string[];
};

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const handleSingleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    const existingAnswerIndex = newAnswers.findIndex(
      a => a.questionId === QUESTIONS[currentQuestion].id
    );

    if (existingAnswerIndex !== -1) {
      newAnswers[existingAnswerIndex] = {
        questionId: QUESTIONS[currentQuestion].id,
        answers: [answer]
      };
    } else {
      newAnswers.push({
        questionId: QUESTIONS[currentQuestion].id,
        answers: [answer]
      });
    }

    setAnswers(newAnswers);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // For now, just go back to home since we only have the first three pages
      navigate("/");
    }
  };

  const handleMultipleAnswers = (answer: string, checked: boolean) => {
    const newAnswers = [...answers];
    const existingAnswerIndex = newAnswers.findIndex(
      a => a.questionId === QUESTIONS[currentQuestion].id
    );

    if (existingAnswerIndex !== -1) {
      const currentAnswers = newAnswers[existingAnswerIndex].answers;
      if (checked) {
        currentAnswers.push(answer);
      } else {
        const index = currentAnswers.indexOf(answer);
        if (index > -1) {
          currentAnswers.splice(index, 1);
        }
      }
      newAnswers[existingAnswerIndex] = {
        questionId: QUESTIONS[currentQuestion].id,
        answers: currentAnswers
      };
    } else {
      newAnswers.push({
        questionId: QUESTIONS[currentQuestion].id,
        answers: checked ? [answer] : []
      });
    }

    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // For now, just go back to home since we only have the first three pages
      navigate("/");
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    } else {
      navigate("/");
    }
  };

  const getCurrentAnswers = () => {
    const currentAnswerObj = answers.find(
      a => a.questionId === QUESTIONS[currentQuestion].id
    );
    return currentAnswerObj?.answers || [];
  };

  const progress = ((currentQuestion + 1) / 6) * 100;

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
              Question {currentQuestion + 1}/6
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-medium text-center">
            {QUESTIONS[currentQuestion].question}
          </h2>
          
          <div className="grid gap-4">
            {QUESTIONS[currentQuestion].type === "single" ? (
              QUESTIONS[currentQuestion].options.map((option) => (
                <Button
                  key={option}
                  onClick={() => handleSingleAnswer(option)}
                  variant="outline"
                  className="w-full py-6 text-lg"
                >
                  {option}
                </Button>
              ))
            ) : (
              <div className="space-y-4">
                {QUESTIONS[currentQuestion].options.map((option) => (
                  <div key={option} className="flex items-center space-x-3">
                    <Checkbox
                      id={option}
                      checked={getCurrentAnswers().includes(option)}
                      onCheckedChange={(checked) => 
                        handleMultipleAnswers(option, checked as boolean)
                      }
                    />
                    <label
                      htmlFor={option}
                      className="text-lg cursor-pointer"
                    >
                      {option}
                    </label>
                  </div>
                ))}
                <div className="flex justify-between mt-6">
                  <Button
                    onClick={handleBack}
                    variant="outline"
                  >
                    Retour
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={getCurrentAnswers().length === 0}
                  >
                    Suivant
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Quiz;