import { useNavigate } from 'react-router-dom';
import { useCountryContext } from './useCountryContext';

export const useQuestionPageNavigate = () => {
  const { setAnswerPage } = useCountryContext();
  const navigate = useNavigate();
  const navigateAndUpdateAnwerPage = (questionId: number) => {
    setAnswerPage(questionId);
    navigate(`/quiz/question/${questionId}`);
  };
  return { navigateAndUpdateAnwerPage };
};
