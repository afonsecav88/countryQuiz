import { useCountryContext } from '../hooks/useCountryContext';
import { usePaginateCountriesAnswer } from '../hooks/usePaginateCountriesAnswer';
import { FlatQuestion } from './FlatQuestion';

export const AnswerItems = () => {
  const { contriesInfo } = useCountryContext();
  const { questionDataPaginated } = usePaginateCountriesAnswer(contriesInfo);
  console.log(questionDataPaginated);
  return (
    <div className="flex justify-center items-center gap-8 mt-6">
      <div className="flex gap-8 flex-wrap justify-center w-2/3">
        <h3 className="flex font-medium text-lg text-justify w-96">
          Which country does this flag {<FlatQuestion />} belong to?
        </h3>
        {questionDataPaginated.map((answerItems) => (
          <button
            key={answerItems.name.official}
            className="flex items-center justify-center  bg-[#393F6F] w-60 h-16 mr-2 font-medium rounded-2xl text-sm  hover:bg-gradient-to-r from-[#E65895] to-[#BC6BE8]">
            {answerItems.name.common}
          </button>
        ))}
      </div>
    </div>
  );
};
