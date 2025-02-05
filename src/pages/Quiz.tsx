import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { QuizLayout } from "@/components/quiz/QuizLayout";
import { QuizProgress } from "@/components/quiz/QuizProgress";
import { SingleChoiceQuestion } from "@/components/quiz/questions/SingleChoiceQuestion";
import { MultipleChoiceQuestion } from "@/components/quiz/questions/MultipleChoiceQuestion";
import { SliderQuestion } from "@/components/quiz/questions/SliderQuestion";
import { useToast } from "@/components/ui/use-toast";
import { QUESTIONS } from "@/data/quizQuestions";
import type { Question, Answer } from "@/components/quiz/types";
import { supabase } from "@/integrations/supabase/client";
import { testSupabaseIntegration } from "@/utils/tests/supabaseIntegrationTests";
import type { Json } from "@/integrations/supabase/types";

const Quiz = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initQuiz = async () => {
      try {
        setIsLoading(true);

        if (process.env.NODE_ENV === 'development') {
          const testResults = await testSupabaseIntegration();
          const allPassed = testResults.every(r => r.success);
          
          if (!allPassed) {
            toast({
              variant: "destructive",
              title: "Supabase Integration Test Failed",
              description: "Check the console for details.",
            });
          } else {
            toast({
              title: "Supabase Integration Test Passed",
              description: "All connections verified successfully.",
            });
          }
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Quiz initialization error:', error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Une erreur est survenue lors du chargement du quiz. Veuillez réessayer.",
        });
      }
    };

    initQuiz();
  }, [toast]);

  const saveUserResponses = async (answers: Answer[]) => {
    try {
      // Convert answers to JSON-compatible format
      const jsonResponses = JSON.stringify(answers) as Json;
      
      const { data: userResponse, error } = await supabase
        .from('user_responses')
        .insert({ responses: jsonResponses })
        .select()
        .single();

      if (error) throw error;
      return userResponse;
    } catch (error) {
      console.error('Error saving user responses:', error);
      throw error;
    }
  };

  const handleSingleAnswer = (answer: string | number) => {
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
  };

  const handleMultipleAnswers = (answer: string, checked: boolean) => {
    try {
      const newAnswers = [...answers];
      const existingAnswerIndex = newAnswers.findIndex(
        a => a.questionId === QUESTIONS[currentQuestion].id
      );

      // Special handling for "Aucune préoccupation particulière" in question 6
      if (QUESTIONS[currentQuestion].id === 6 && answer === "Aucune préoccupation particulière" && checked) {
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
      if (currentQuestion > 0) {
        setCurrentQuestion(prev => prev - 1);
      } else {
        navigate("/");
      }
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
      {currentQuestionData.type === "slider" ? (
        <SliderQuestion
          question={currentQuestionData.question}
          min={currentQuestionData.sliderConfig!.min}
          max={currentQuestionData.sliderConfig!.max}
          step={currentQuestionData.sliderConfig!.step}
          value={Number(getCurrentAnswers()[0] || currentQuestionData.sliderConfig!.min)}
          labels={currentQuestionData.sliderConfig!.labels}
          onChange={handleSingleAnswer}
        />
      ) : currentQuestionData.type === "single" ? (
        <SingleChoiceQuestion
          question={currentQuestionData.question}
          options={currentQuestionData.options!}
          onAnswer={handleSingleAnswer}
        />
      ) : (
        <MultipleChoiceQuestion
          question={currentQuestionData.question}
          options={currentQuestionData.options!}
          selectedAnswers={getCurrentAnswers().map(String)}
          onAnswerChange={handleMultipleAnswers}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
    </QuizLayout>
  );
};

export default Quiz;