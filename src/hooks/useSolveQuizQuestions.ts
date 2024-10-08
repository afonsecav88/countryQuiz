import { useCountryStore } from '../store/CountryStore';

export const useSolveQuizQuestions = () => {
  const answerPage = useCountryStore((state) => state.answerPage);
  const countriesInfoPaginated = useCountryStore(
    (state) => state.countriesInfoPaginated
  );
  const randomPosition = useCountryStore((state) => state.randomPosition);
  const calculateScoreQuiz = useCountryStore(
    (state) => state.calculateScoreQuiz
  );
  const setNavigatePage = useCountryStore((state) => state.setNavigatePage);
  const setValidAnswer = useCountryStore((state) => state.setValidAnswer);
  const setInvalidAnswer = useCountryStore((state) => state.setInvalidAnswer);
  const setClickedAnswer = useCountryStore((state) => state.setClickedAnswer);
  const setQuestionAnswered = useCountryStore(
    (state) => state.setQuestionAnswered
  );

  const handleClick = (index: number) => {
    if (
      countriesInfoPaginated[index].name.common ===
      countriesInfoPaginated[randomPosition[answerPage - 1]].name.common
    ) {
      setValidAnswer(countriesInfoPaginated[index].name.common);
      calculateScoreQuiz();
    } else {
      setInvalidAnswer(countriesInfoPaginated[index].name.common);
      setValidAnswer(
        countriesInfoPaginated[randomPosition[answerPage - 1]].name.common
      );
    }
    setQuestionAnswered();
    setClickedAnswer(countriesInfoPaginated[index].name.common);
    setNavigatePage();
  };

  return {
    handleClick,
    countriesInfoPaginated,
    randomPosition,
    answerPage,
  };
};
