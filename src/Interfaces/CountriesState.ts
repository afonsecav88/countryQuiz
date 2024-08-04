import { Dispatch } from 'react';
import { Countries } from './CountryInterface';

export interface CountriesState {
  contriesInfo: Countries[];
  answerPageData: Countries[];
  answerPage: number;
  answerPageSize: number;
  setContriesInfo: Dispatch<React.SetStateAction<Countries[]>>;
  setAnswerPageData: Dispatch<React.SetStateAction<Countries[]>>;
  setAnswerPage: Dispatch<React.SetStateAction<number>>;
  setAnswerPageSize: Dispatch<React.SetStateAction<number>>;
}
