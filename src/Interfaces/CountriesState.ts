import React, { Dispatch } from 'react';
import { Countries } from './CountryInterface';

export interface CountriesState {
  contriesInfo: Countries[];
  answerPageData: Countries[];
  answerPage: number;
  answerPageSize: number;
  answerPageVisited: boolean;
  validAnswer: boolean;
  setContriesInfo: Dispatch<React.SetStateAction<Countries[]>>;
  setAnswerPageData: Dispatch<React.SetStateAction<Countries[]>>;
  setAnswerPage: Dispatch<React.SetStateAction<number>>;
  setAnswerPageSize: Dispatch<React.SetStateAction<number>>;
  setAnswerPageVisited: Dispatch<React.SetStateAction<boolean>>;
  setValidAnswer: Dispatch<React.SetStateAction<boolean>>;
}
