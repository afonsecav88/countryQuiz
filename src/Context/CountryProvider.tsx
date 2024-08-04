import { useState } from 'react';
import { CountryContext } from './CountryContext';
import { Countries } from '../Interfaces/CountryInterface';
import { CountriesState } from '../Interfaces/CountriesState';

interface CountryPorviderProps {
  children: JSX.Element | JSX.Element[];
}

export const CountryProvider = ({ children }: CountryPorviderProps) => {
  const [contriesInfo, setContriesInfo] = useState<Countries[]>([]);
  const [answerPageData, setAnswerPageData] = useState<Countries[]>([]);
  const [answerPage, setAnswerPage] = useState<number>(1);
  const [answerPageSize, setAnswerPageSize] = useState<number>(4);
  const [answerPageVisited, setAnswerPageVisited] = useState<boolean>(false);
  const [validAnswer, setValidAnswer] = useState<boolean>(false);

  const countriesDataObject: CountriesState = {
    contriesInfo,
    setContriesInfo,
    answerPageData,
    setAnswerPageData,
    answerPage,
    setAnswerPage,
    answerPageSize,
    setAnswerPageSize,
    answerPageVisited,
    setAnswerPageVisited,
    validAnswer,
    setValidAnswer,
  };
  return (
    <CountryContext.Provider value={countriesDataObject}>
      {children}
    </CountryContext.Provider>
  );
};
