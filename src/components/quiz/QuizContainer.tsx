import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizLayout } from './QuizLayout';
import { QuizProgress } from './QuizProgress';
import { SingleChoiceQuestion } from './questions/SingleChoiceQuestion';
import { MultipleChoiceQuestion } from './questions/MultipleChoiceQuestion';
import { toast } from 'sonner';
import { performanceMonitor } from '@/utils/performanceMonitor';

const questions = [
  {
    id: 1,
    type: 'single',
    question: "Quel est votre objectif principal ?",
    options: [
      "Améliorer l'énergie",
      "Renforcer l'immunité",
      "Améliorer le sommeil",
      "Réduire le stress",
      "Optimiser la digestion"
    ]
  },
  {
    id: 2,
    type: 'multiple',
    question: "Avez-vous des préoccupations de santé particulières ?",
    options: [
      "Stress",
      "Problèmes digestifs",
      "Difficulté à dormir",
      "Fatigue chronique",
      "Système immunitaire faible"
    ]
  },
  {
    id: 3,
    type: 'single',
    question: "À quel moment de la journée ressentez-vous le plus de fatigue ?",
    options: [
      "Le matin au réveil",
      "En milieu de matinée",
      "Après le déjeuner",
      "En fin d'après-midi",
      "Le soir"
    ]
  },
  {
    id: 4,
    type: 'multiple',
    question: "Quels sont vos habitudes de vie actuelles ?",
    options: [
      "Sport régulier",
      "Alimentation équilibrée",
      "Méditation/Yoga",
      "Sommeil régulier",
      "Travail stressant"
    ]
  },
  {
    id: 5,
    type: 'single',
    question: "Comment qualifieriez-vous votre niveau de stress quotidien ?",
    options: [
      "Très faible",
      "Faible",
      "Modéré",
      "Élevé",
      "Très élevé"
    ]
  }
];

export const QuizContainer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const navigate = useNavigate();

  const handleSingleChoice = (answer: string) => {
    performanceMonitor.logEvent('answer_submitted', { questionId: currentQuestion + 1 });
    setAnswers(prev => ({ ...prev, [currentQuestion]: answer }));
    handleNext();
  };

  const handleMultipleChoice = (answer: string, checked: boolean) => {
    setAnswers(prev => {
      const currentAnswers = (prev[currentQuestion] as string[]) || [];
      if (checked) {
        return { ...prev, [currentQuestion]: [...currentAnswers, answer] };
      } else {
        return {
          ...prev,
          [currentQuestion]: currentAnswers.filter(a => a !== answer)
        };
      }
    });
  };

  const handleNext = () => {
    performanceMonitor.logEvent('navigation_next', { fromQuestion: currentQuestion });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      navigate('/results', { state: { answers } });
    }
  };

  const handleBack = () => {
    performanceMonitor.logEvent('navigation_back', { fromQuestion: currentQuestion });
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      toast.info("Retour à la question précédente");
    }
  };

  const currentQuestionData = questions[currentQuestion];

  return (
    <QuizLayout currentQuestion={currentQuestion}>
      <QuizProgress 
        currentQuestion={currentQuestion} 
        totalQuestions={questions.length} 
      />
      
      {currentQuestionData.type === 'single' ? (
        <SingleChoiceQuestion
          question={currentQuestionData.question}
          options={currentQuestionData.options}
          onAnswer={handleSingleChoice}
        />
      ) : (
        <MultipleChoiceQuestion
          question={currentQuestionData.question}
          options={currentQuestionData.options}
          selectedAnswers={(answers[currentQuestion] as string[]) || []}
          onAnswerChange={handleMultipleChoice}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
    </QuizLayout>
  );
};