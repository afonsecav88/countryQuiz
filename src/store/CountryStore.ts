import { create } from 'zustand';
import { Countries } from '../Interfaces/CountryInterface';
import { countryService } from '../services/countryService';
import { NavigateFunction } from 'react-router-dom';

interface CountryState {
  CountriesInfo: Countries[];
  CountriesInfoToPaginated: Countries[];
  CountriesInfoPaginated: Countries[];
  answerPage: number;
  randomPosition: number[];
  // questionNavigate: () => void;
  setCountriesInfo: () => void;
  setCountriesInfoToPaginated: (countries: Countries[]) => void;
  paginatedCountriesInfo: (answerPage: number, countries: Countries[]) => void;
  updatePageAnswer: (
    navigate: NavigateFunction,
    questionPageId: number
  ) => void;
  setRandomPosition: () => void;
}

export const useCountryStore = create<CountryState>()((set) => ({
  answerPage: 1,
  randomPosition: [],
  CountriesInfo: [],
  CountriesInfoToPaginated: [],
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
  setCountriesInfoToPaginated: (CountriesInfo) => {
    set({ CountriesInfoToPaginated: CountriesInfo.slice(0, 39) });
  },
  paginatedCountriesInfo: (answerPage, CountriesInfoPaginated) => {
    const startIndex = (answerPage - 1) * 4;
    const endIndex = startIndex + 4;
    set({
      CountriesInfoPaginated: CountriesInfoPaginated.slice(
        startIndex,
        endIndex
      ),
    });
  },

  updatePageAnswer: (navigate, questionPageId) => {
    set({ answerPage: questionPageId });
    navigate(`/quiz/question/${questionPageId}`);
  },

  setRandomPosition: () => {
    const randomPosition = Math.floor(Math.random() * 4);
    set((state) => ({
      randomPosition: [...state.randomPosition, randomPosition],
    }));
  },
}));
