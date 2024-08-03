import { Countries } from '../Interfaces/CountryInterface';

export const usePaginateCountriesAnswer = (
  dataCountries: Countries[]
): Countries[] => {
  const answerPage: number = 1;
  const anwerPageSize: number = 4;
  const startIndex = (answerPage - 1) * anwerPageSize;
  const endIndex = startIndex + anwerPageSize;
  const questionDataPaginated = dataCountries.slice(startIndex, endIndex);
  return questionDataPaginated;
};
