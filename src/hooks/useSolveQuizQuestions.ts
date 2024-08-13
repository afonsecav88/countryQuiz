import { useCountryStore } from '../store/CountryStore';

export const useSolveQuizQuestions = () => {
  const randomPosition = useCountryStore((state) => state.randomPosition);
  const answerPage = useCountryStore((state) => state.answerPage);
  const countriesInfoPaginated = useCountryStore(
    (state) => state.CountriesInfoPaginated
  );
  const setValidAnswer = useCountryStore((state) => state.setValidAnswer);
  const setInvalidAnswer = useCountryStore((state) => state.setInvalidAnswer);
  const setQuestionAnswered = useCountryStore(
    (state) => state.setQuestionAnswered
  );

  const handleClick = (index: number) => {
    if (
      countriesInfoPaginated[index].name.common ===
      countriesInfoPaginated[randomPosition[answerPage - 1]].name.common
    ) {
      setValidAnswer(countriesInfoPaginated[index].name.common);
    } else {
      setInvalidAnswer(countriesInfoPaginated[index].name.common);
      setValidAnswer(
        countriesInfoPaginated[randomPosition[answerPage - 1]].name.common
      );
    }
    setQuestionAnswered();
  };
  return {
    handleClick,
    countriesInfoPaginated,
    randomPosition,
    answerPage,
  };
};
