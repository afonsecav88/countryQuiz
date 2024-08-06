import { Countries } from '../Interfaces/CountryInterface';
import { useCountryContext } from './useCountryContext';

export const usePaginateCountriesAnswer = (
  dataCountries: Countries[]
): { questionDataPaginated: Countries[] } => {
  const { answerPage, answerPageSize } = useCountryContext();
  const startIndex = (answerPage - 1) * answerPageSize;
  const endIndex = startIndex + answerPageSize;
  const questionDataPaginated = dataCountries.slice(startIndex, endIndex);
  // const resp = questionDataPaginated.sort((x) => Math.random() - 0.5);
  return { questionDataPaginated };
};
