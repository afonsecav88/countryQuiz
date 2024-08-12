import { useSetRandomPosition } from '../hooks/useSetRandomPosition';
import { useCountryStore } from '../store/CountryStore';
import { FlatQuestion } from './FlatQuestion';

export const AnswerItems = () => {
  useSetRandomPosition();
  const countriesInfoPaginated = useCountryStore(
    (state) => state.CountriesInfoPaginated
  );
  const CountriesInfoToPaginated = useCountryStore(
    (state) => state.CountriesInfoToPaginated
  );
  const setValidAnswer = useCountryStore((state) => state.setValidAnswer);
  const setInvalidAnswer = useCountryStore((state) => state.setInvalidAnswer);
  const setQuestionAnswered = useCountryStore(
    (state) => state.setQuestionAnswered
  );
  const randomPosition = useCountryStore((state) => state.randomPosition);
  const answerPage = useCountryStore((state) => state.answerPage);

  const handleClick = (index: number) => {
    if (
      countriesInfoPaginated[index].name.common ===
      countriesInfoPaginated[randomPosition[answerPage - 1]].name.common
    ) {
      setValidAnswer(countriesInfoPaginated[index].name.common);
    } else {
      setInvalidAnswer(countriesInfoPaginated[index].name.common);
    }
    setQuestionAnswered();
  };

  console.log(CountriesInfoToPaginated);
  // const showValidAnswer = (index: number) => {
  //   if (
  //     countriesInfoPaginated[index].name.common ===
  //     countriesInfoPaginated[randomPosition[answerPage - 1]].name.common
  //   ) {
  //     <img src="/Check_round_fill.svg" alt="Check_round_fill.svg" />;
  //   } else <img src="/Close_round_fill.svg" alt="Close_round_fill.svg" />;
  // };

  if (countriesInfoPaginated.length === 0 || randomPosition.length === 0)
    return;
  return (
    <div className="flex flex-col justify-center items-center gap-8 mt-6">
      {/* <Question />
       */}
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
      <div className="flex gap-8 flex-wrap justify-center w-2/3">
        {countriesInfoPaginated.map((answerItems, index) => (
          <button
            key={answerItems.name.common}
            disabled={answerItems.disabledQuestion === true}
            onClick={() => handleClick(index)}
            className="flex items-center justify-center gap-2 bg-[#393F6F] w-60 h-16 mr-2 p-2 font-medium rounded-2xl text-sm  hover:bg-gradient-to-r from-[#E65895] to-[#BC6BE8]">
            {answerItems.name.common}
            {/* {answerItems.clickedAnwer === true && showValidAnswer(index)} */}
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
