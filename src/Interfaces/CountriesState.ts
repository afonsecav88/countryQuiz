import { Countries } from './CountryInterface';

export interface CountriesState {
  contriesInfo: Countries[];
  questionDataPaginated: {
    answerPageData: Countries[];
    answerPage: number;
    answerPageSize: number;
  };
}
