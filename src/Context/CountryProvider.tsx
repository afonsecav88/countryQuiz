import { useState } from 'react';
import { CountryContext } from './CountryContext';
import { Countries } from '../Interfaces/CountryInterface';
import { CountriesState } from '../Interfaces/CountriesState';

interface CountryPorviderProps {
  children: JSX.Element | JSX.Element[];
}

// contriesInfo: Countries[];
//   answerPageData: Countries[];
//   answerPage: number;
//   answerPageSize: number;

export const CountryProvider = ({ children }: CountryPorviderProps) => {
  const [contriesInfo, setContriesInfo] = useState<Countries[]>([]);
  const [answerPageData, setAnswerPageData] = useState<Countries[]>([]);
  const [answerPage, setAnswerPage] = useState<number>(1);
  const [answerPageSize, setAnswerPageSize] = useState<number>(4);

  const countriesDataObject: CountriesState = {
    contriesInfo,
    setContriesInfo,
    answerPageData,
    setAnswerPageData,
    answerPage,
    setAnswerPage,
    answerPageSize,
    setAnswerPageSize,
  };
  return (
    <CountryContext.Provider value={countriesDataObject}>
      {children}
    </CountryContext.Provider>
  );
};
