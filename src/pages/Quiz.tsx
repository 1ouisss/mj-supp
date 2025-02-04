import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { QuizLayout } from "@/components/quiz/QuizLayout";
import { QuizProgress } from "@/components/quiz/QuizProgress";
import { SingleChoiceQuestion } from "@/components/quiz/questions/SingleChoiceQuestion";
import { MultipleChoiceQuestion } from "@/components/quiz/questions/MultipleChoiceQuestion";
import { runRecommendationTests } from "@/utils/recommendationTesting";
import { useToast } from "@/components/ui/use-toast";
import PerformanceMonitor from "@/utils/performanceMonitor";
import type { Question, Answer } from "@/components/quiz/types";

const QUESTIONS: Question[] = [
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
      "Déséquilibres hormonaux",
      "Aucune"
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
  },
  {
    id: 4,
    question: "Comment gérez-vous habituellement le stress ?",
    type: "single",
    options: [
      "Constamment stressé et dépassé",
      "Stress léger occasionnel",
      "Difficulté à se détendre ou à dormir"
    ]
  },
  {
    id: 5,
    question: "Quels sont vos objectifs ou préoccupations concernant la peau ?",
    type: "multiple",
    options: [
      "Réduire la sécheresse ou le teint terne",
      "Gérer l'acné ou l'inflammation",
      "Traiter les ridules, rides ou le vieillissement",
      "Aucune préoccupation particulière"
    ]
  },
  {
    id: 6,
    question: "Avez-vous des objectifs spécifiques pour la santé hormonale ou thyroïdienne ?",
    type: "single",
    options: [
      "Gestion des symptômes de la ménopause ou du SPM",
      "Soutien de la fonction thyroïdienne",
      "Aucune préoccupation hormonale spécifique"
    ]
  }
];

const Quiz = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initQuiz = async () => {
      try {
        PerformanceMonitor.startMeasure('quizInit');
        setIsLoading(true);

        if (process.env.NODE_ENV === 'development') {
          await runRecommendationTests();
        }

        setIsLoading(false);
        PerformanceMonitor.endMeasure('quizInit');
      } catch (error) {
        console.error('Quiz initialization error:', error);
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Une erreur est survenue lors du chargement du quiz. Veuillez réessayer.",
        });
      }
    };

    initQuiz();

    return () => {
      PerformanceMonitor.clearMetrics();
    };
  }, [toast]);

  const handleSingleAnswer = (answer: string) => {
    try {
      PerformanceMonitor.startMeasure('answerSubmission');
      
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

      if (currentQuestion === QUESTIONS.length - 1) {
        navigate("/results", { 
          state: { 
            answers: newAnswers,
            recommendationData: newAnswers.filter(a => a.questionId <= 2)
          } 
        });
      } else {
        setCurrentQuestion(prev => prev + 1);
      }

      PerformanceMonitor.endMeasure('answerSubmission');
    } catch (error) {
      console.error('Error handling single answer:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de l'enregistrement de votre réponse.",
      });
    }
  };

  const handleMultipleAnswers = (answer: string, checked: boolean) => {
    try {
      PerformanceMonitor.startMeasure('multipleAnswerUpdate');
      
      const newAnswers = [...answers];
      const existingAnswerIndex = newAnswers.findIndex(
        a => a.questionId === QUESTIONS[currentQuestion].id
      );

      // Special handling for "Aucune préoccupation particulière" in question 5
      if (QUESTIONS[currentQuestion].id === 5 && answer === "Aucune préoccupation particulière" && checked) {
        if (existingAnswerIndex !== -1) {
          newAnswers[existingAnswerIndex] = {
            questionId: QUESTIONS[currentQuestion].id,
            answers: ["Aucune préoccupation particulière"]
          };
        } else {
          newAnswers.push({
            questionId: QUESTIONS[currentQuestion].id,
            answers: ["Aucune préoccupation particulière"]
          });
        }
        setAnswers(newAnswers);
        setCurrentQuestion(prev => prev + 1);
        return;
      }

      // If any other option is selected, remove "Aucune préoccupation particulière" if it exists
      if (existingAnswerIndex !== -1) {
        let currentAnswers = newAnswers[existingAnswerIndex].answers;
        if (checked) {
          currentAnswers = currentAnswers.filter(a => a !== "Aucune préoccupation particulière");
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
      PerformanceMonitor.endMeasure('multipleAnswerUpdate');
    } catch (error) {
      console.error('Error handling multiple answers:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de l'enregistrement de vos réponses.",
      });
    }
  };

  const handleNext = () => {
    try {
      PerformanceMonitor.startMeasure('navigation');
      
      if (currentQuestion === QUESTIONS.length - 1) {
        navigate("/results", { 
          state: { 
            answers,
            recommendationData: answers.filter(a => a.questionId <= 2)
          } 
        });
      } else {
        setCurrentQuestion(prev => prev + 1);
      }

      PerformanceMonitor.endMeasure('navigation');
    } catch (error) {
      console.error('Navigation error:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de la navigation.",
      });
    }
  };

  const handleBack = () => {
    try {
      PerformanceMonitor.startMeasure('navigation');
      
      if (currentQuestion > 0) {
        setCurrentQuestion(prev => prev - 1);
      } else {
        navigate("/");
      }

      PerformanceMonitor.endMeasure('navigation');
    } catch (error) {
      console.error('Navigation error:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de la navigation.",
      });
    }
  };

  const getCurrentAnswers = () => {
    const currentAnswerObj = answers.find(
      a => a.questionId === QUESTIONS[currentQuestion].id
    );
    return currentAnswerObj?.answers || [];
  };

  if (isLoading) {
    return (
      <QuizLayout currentQuestion={currentQuestion}>
        <div className="flex items-center justify-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </QuizLayout>
    );
  }

  const currentQuestionData = QUESTIONS[currentQuestion];

  return (
    <QuizLayout currentQuestion={currentQuestion}>
      <QuizProgress 
        currentQuestion={currentQuestion} 
        totalQuestions={QUESTIONS.length}
      />
      {currentQuestionData.type === "single" ? (
        <SingleChoiceQuestion
          question={currentQuestionData.question}
          options={currentQuestionData.options}
          onAnswer={handleSingleAnswer}
        />
      ) : (
        <MultipleChoiceQuestion
          question={currentQuestionData.question}
          options={currentQuestionData.options}
          selectedAnswers={getCurrentAnswers()}
          onAnswerChange={handleMultipleAnswers}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
    </QuizLayout>
  );
};

export default Quiz;