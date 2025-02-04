import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuizLayout } from "@/components/quiz/QuizLayout";
import { QuizProgress } from "@/components/quiz/QuizProgress";
import { SingleChoiceQuestion } from "@/components/quiz/questions/SingleChoiceQuestion";
import { MultipleChoiceQuestion } from "@/components/quiz/questions/MultipleChoiceQuestion";
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
  }
];

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

  const currentQuestionData = QUESTIONS[currentQuestion];

  return (
    <QuizLayout>
      <QuizProgress 
        currentQuestion={currentQuestion} 
        totalQuestions={6}
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