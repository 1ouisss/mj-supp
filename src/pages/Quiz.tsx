import { useEffect } from 'react';
import { QuizContainer } from '@/components/quiz/QuizContainer';
import { performanceMonitor } from '@/utils/performanceMonitor';

const Quiz = () => {
  useEffect(() => {
    performanceMonitor.logEvent('quiz_page_loaded');
  }, []);

  return <QuizContainer />;
};

export default Quiz;