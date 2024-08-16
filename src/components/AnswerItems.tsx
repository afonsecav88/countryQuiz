import { useNavigateScoreQuiz } from '../hooks/useNavigateScoreQuiz';
import { useSetRandomPosition } from '../hooks/useSetRandomPosition';
import { useSolveQuizQuestions } from '../hooks/useSolveQuizQuestions';
import { FlatQuestion } from './FlatQuestion';

export const AnswerItems = () => {
  useSetRandomPosition();
  const { countriesInfoPaginated, randomPosition, handleClick, answerPage } =
    useSolveQuizQuestions();
  useNavigateScoreQuiz();

  if (countriesInfoPaginated.length === 0 || randomPosition.length === 0)
    return;
  return (
    <div className="flex flex-col justify-center items-center mt-6 w-auto">
      {/* <h3 className="flex justify-center font-medium text-center text-xl "> */}
      <span className="font-medium text-center text-xl p-0 m-0">
        Which country does this flag
        {
          <FlatQuestion
            flat={
              countriesInfoPaginated[randomPosition[answerPage - 1]].flags.svg
            }
          />
        }
        belong
      </span>
      <span className="font-medium text-center text-xl pb-10 m-0">to?</span>
      {/* </h3> */}
      <div className="flex gap-8 flex-wrap justify-center w-2/3">
        {countriesInfoPaginated.map((answerItems, index) => (
          <button
            key={answerItems.name.common}
            disabled={answerItems.disabledQuestion === true}
            onClick={() => handleClick(index)}
            className={`flex items-center justify-center gap-2 bg-[#393F6F] w-60 h-16 mr-2 p-2 font-medium rounded-2xl text-sm  hover:bg-gradient-to-r from-[#E65895] to-[#BC6BE8] ${
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
