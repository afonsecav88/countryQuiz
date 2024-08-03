import { Countries } from '../Interfaces/CountryInterface';

export const usePaginateCountriesAnswer = (
  dataCountries: Countries[]
): Countries[] => {
  const question: number = 1;
  const pageQuestionSize: number = 4;
  const startIndex = (question - 1) * pageQuestionSize;
  const endIndex = startIndex + pageQuestionSize;
  const questionDataPaginated = dataCountries.slice(startIndex, endIndex);
  return questionDataPaginated;
};
