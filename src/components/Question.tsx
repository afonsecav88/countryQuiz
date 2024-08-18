import { FlatQuestion } from './FlatQuestion';
import { useCountryStore } from '../store/CountryStore';
import { LoadingAnswers } from './LoadingAnswers';

export const Question = () => {
  const countriesInfoPaginated = useCountryStore(
    (state) => state.countriesInfoPaginated
  );
  const randomPosition = Math.floor(
    Math.random() * countriesInfoPaginated.length
  );
  if (countriesInfoPaginated.length === 0) return <LoadingAnswers />;
  return (
    <h3 className="flex justify-center font-medium text-xl">
      Which country does this flag
      {<FlatQuestion flat={countriesInfoPaginated[randomPosition].flags.svg} />}
      belong to?
    </h3>
  );
};
