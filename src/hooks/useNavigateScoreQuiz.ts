import { useNavigate } from 'react-router-dom';
import { useCountryStore } from '../store/CountryStore';
import { useEffect } from 'react';

export const useNavigateScoreQuiz = () => {
  const navigate = useNavigate();
  const answerPage = useCountryStore((state) => state.answerPage);
  const countriesInfoToPaginated = useCountryStore(
    (state) => state.countriesInfoToPaginated
  );
  useEffect(() => {
    if (
      answerPage === 10 &&
      countriesInfoToPaginated[38].disabledQuestion === true
    ) {
      return navigate(`/quiz/completed`);
    }
  }, [answerPage, countriesInfoToPaginated, navigate]);
};
