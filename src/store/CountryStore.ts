import { create } from 'zustand';
import { Countries } from '../Interfaces/CountryInterface';
import { countryService } from '../services/countryService';
import { NavigateFunction } from 'react-router-dom';

interface CountryState {
  CountriesInfo: Countries[];
  CountriesInfoPaginated: Countries[];
  answerPage: number;
  // questionNavigate: () => void;
  setCountriesInfo: () => void;
  setPaginatedCountriesInfo: (
    answerPage: number,
    countries: Countries[]
  ) => void;
  updatePageAnswer: (
    navigate: NavigateFunction,
    questionPageId: number
  ) => void;
}

export const useCountryStore = create<CountryState>()((set) => ({
  answerPage: 1,
  CountriesInfo: [],
  CountriesInfoPaginated: [],

  setCountriesInfo: () => {
    const countriesData = countryService();
    countriesData.then((data: Countries[]) => {
      if (data === undefined) set({ CountriesInfo: [] });
      else {
        const shuffledData = data.sort(() => Math.random() - 0.5);
        set({ CountriesInfo: shuffledData });
      }
    });
  },

  setPaginatedCountriesInfo: (answerPage, CountriesInfo) => {
    const startIndex = (answerPage - 1) * 4;
    const endIndex = startIndex + 4;
    set({ CountriesInfoPaginated: CountriesInfo.slice(startIndex, endIndex) });
  },

  updatePageAnswer: (navigate, questionPageId) => {
    set({ answerPage: questionPageId });
    navigate(`/quiz/question/${questionPageId}`);
  },
}));
