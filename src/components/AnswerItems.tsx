import { useNavigateScoreQuiz } from '../hooks/useNavigateScoreQuiz';
import { useSolveQuizQuestions } from '../hooks/useSolveQuizQuestions';
import { FlatQuestion } from './FlatQuestion';
import { useSetRandomPosition } from '../hooks/useSetRandomPosition';
import { LoadingAnswers } from './LoadingAnswers';

export const AnswerItems = () => {
  useSetRandomPosition();
  const { countriesInfoPaginated, randomPosition, answerPage, handleClick } =
    useSolveQuizQuestions();
  useNavigateScoreQuiz();

  if (
    !countriesInfoPaginated ||
    !randomPosition ||
    randomPosition.length < answerPage
  ) {
    return <LoadingAnswers />;
  }

  const currentFlag =
    countriesInfoPaginated[randomPosition[answerPage - 1]]?.flags?.svg;

  return (
    <div className="flex flex-col justify-center items-center mt-6 w-auto">
      <span className="font-medium text-center text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl p-0 m-0">
        Which country does this flag
        {currentFlag && <FlatQuestion flat={currentFlag} />}
        belong
      </span>
      <span className="font-medium text-center  text-base sm:text-xl md:text-xl lg:text-xl xl:text-xl pb-10 m-0">
        to?
      </span>

      <div className="flex gap-5 flex-wrap justify-center w-2/3">
        {countriesInfoPaginated.map((answerItems, index) => (
          <button
            key={answerItems.name.common}
            disabled={answerItems.disabledQuestion === true}
            onClick={() => handleClick(index)}
            className={`flex items-center justify-center gap-2 bg-[#393F6F] w-60 h-16 mr-2 p-2 font-medium rounded-2xl text-sm hover:bg-gradient-to-r from-[#E65895] to-[#BC6BE8] ${
              answerItems.clickedAnwer === true &&
              'bg-gradient-to-r from-[#E65895] to-[#BC6BE8]'
            }`}>
            {answerItems.name.common}
            {answerItems.invalidQuestion === true && (
              <img src="/Close_round_fill.svg" alt="Close_round_fill.svg" />
            )}
            {answerItems.validQuestion === true && (
              <img src="/Check_round_fill.svg" alt="Check_round_fill.svg" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
