import { useSetRandomPosition } from '../hooks/useSetRandomPosition';
import { useSolveQuizQuestions } from '../hooks/useSolveQuizQuestions';
import { FlatQuestion } from './FlatQuestion';
import { QuizComplete } from './QuizComplete';

export const AnswerItems = () => {
  useSetRandomPosition();
  const { countriesInfoPaginated, randomPosition, handleClick, answerPage } =
    useSolveQuizQuestions();

  if (countriesInfoPaginated.length === 0 || randomPosition.length === 0)
    return;
  return (
    <div className="flex flex-col justify-center items-center gap-8 mt-6">
      <h3 className="flex justify-center font-medium text-xl">
        Which country does this flag
        {
          <FlatQuestion
            flat={
              countriesInfoPaginated[randomPosition[answerPage - 1]].flags.svg
            }
          />
        }
        belong to?
      </h3>
      <QuizComplete />
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
