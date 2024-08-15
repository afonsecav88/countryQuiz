import { useCountryStore } from '../store/CountryStore';

export const useSolveQuizQuestions = () => {
  const randomPosition = useCountryStore((state) => state.randomPosition);
  const scoreQuiz = useCountryStore((state) => state.scoreQuiz);
  const answerPage = useCountryStore((state) => state.answerPage);
  const setNavigatePage = useCountryStore((state) => state.setNavigatePage);
  const countriesInfoPaginated = useCountryStore(
    (state) => state.countriesInfoPaginated
  );
  const calculateScoreQuiz = useCountryStore(
    (state) => state.calculateScoreQuiz
  );
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
  console.log(scoreQuiz);
  return {
    handleClick,
    countriesInfoPaginated,
    randomPosition,
    answerPage,
  };
};
