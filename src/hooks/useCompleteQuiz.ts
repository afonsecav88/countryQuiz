import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCountryStore } from '../store/CountryStore';
import { useSetCountriesInfo } from './useSetCountriesInfo';
import { useSetCountriesInfoPaginated } from './useSetCountriesInfoPaginated';
import { useSetCountriesInfoToPaginate } from './useSetCountriesInfoToPaginate';

export const useCompleteQuiz = () => {
  const navigate = useNavigate();
  const resetAnswerPage = useCountryStore((state) => state.resetAnswerPage);
  const scoreQuiz = useCountryStore((state) => state.scoreQuiz);
  useSetCountriesInfo();
  useSetCountriesInfoToPaginate();
  useSetCountriesInfoPaginated();
  const resetNavigatePage = useCountryStore((state) => state.resetNavigatePage);
  const resetScoreQuiz = useCountryStore((state) => state.resetScoreQuiz);

  useEffect(() => {
    resetAnswerPage();
  }, [resetAnswerPage]);

  const handleClick = () => {
    resetNavigatePage();
    resetScoreQuiz();
    navigate(`/quiz/question/1`, { replace: true });
  };
  return { handleClick, scoreQuiz };
};
