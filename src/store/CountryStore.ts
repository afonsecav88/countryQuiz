import { create } from 'zustand';
import { Countries } from '../Interfaces/CountryInterface';
import { countryService } from '../services/countryService';
import { NavigateFunction } from 'react-router-dom';

interface CountryState {
  countriesInfo: Countries[];
  countriesInfoToPaginated: Countries[];
  countriesInfoPaginated: Countries[];
  answerPage: number;
  scoreQuiz: number;
  randomPosition: number[];
  navigatedPages: boolean[];
  setCountriesInfo: () => void;
  setCountriesInfoToPaginated: (countries: Countries[]) => void;
  paginatedCountriesInfo: (answerPage: number, countries: Countries[]) => void;
  updatePageAnswer: (
    navigate: NavigateFunction,
    questionPageId: number
  ) => void;
  setRandomPosition: () => void;
  setValidAnswer: (commonName: string) => void;
  setInvalidAnswer: (commonName: string) => void;
  setQuestionAnswered: () => void;
  setClickedAnswer: (commonName: string) => void;
  setNavigatePage: () => void;
  calculateScoreQuiz: () => void;
}

export const useCountryStore = create<CountryState>()((set) => ({
  answerPage: 1,
  scoreQuiz: 0,
  randomPosition: [],
  navigatedPages: [],
  countriesInfo: [],
  countriesInfoToPaginated: [],
  countriesInfoPaginated: [],

  setCountriesInfo: () => {
    const countriesData = countryService();
    countriesData.then((data: Countries[]) => {
      if (data === undefined) set({ countriesInfo: [] });
      else {
        const shuffledData = data.sort(() => Math.random() - 0.5);
        set({ countriesInfo: shuffledData });
      }
    });
  },
  setCountriesInfoToPaginated: (CountriesInfo) => {
    set({ countriesInfoToPaginated: CountriesInfo.slice(0, 40) });
  },
  paginatedCountriesInfo: (answerPage, CountriesInfoPaginated) => {
    const startIndex = (answerPage - 1) * 4;
    const endIndex = startIndex + 4;
    set({
      countriesInfoPaginated: CountriesInfoPaginated.slice(
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
    const randomPosition = Math.floor(Math.random() * 3);
    set((state) => ({
      randomPosition: [...state.randomPosition, randomPosition],
    }));
  },
  setValidAnswer: (commonName) => {
    set((state) => ({
      countriesInfoToPaginated: state.countriesInfoToPaginated.map((country) =>
        country.name.common === commonName
          ? {
              ...country,
              validQuestion: true,
            }
          : country
      ),
    }));
  },
  setInvalidAnswer: (commonName) => {
    set((state) => ({
      countriesInfoToPaginated: state.countriesInfoToPaginated.map((country) =>
        country.name.common === commonName
          ? {
              ...country,
              invalidQuestion: true,
            }
          : country
      ),
    }));
  },

  setQuestionAnswered: () => {
    set((state) => ({
      countriesInfoToPaginated: state.countriesInfoToPaginated.map(
        (country, index) => {
          const startIndex = (state.answerPage - 1) * 4;
          const endIndex = startIndex + 4;
          if (index >= startIndex && index < endIndex) {
            return {
              ...country,
              disabledQuestion: true,
            };
          }
          return country;
        }
      ),
    }));
  },

  setNavigatePage: () => {
    set((state) => ({
      navigatedPages: [...state.navigatedPages, true],
    }));
  },

  setClickedAnswer: (commonName: string) => {
    set((state) => ({
      countriesInfoToPaginated: state.countriesInfoToPaginated.map((country) =>
        country.name.common === commonName
          ? {
              ...country,
              clickedAnwer: true,
            }
          : country
      ),
    }));
  },

  calculateScoreQuiz: () => {
    set((state) => ({ scoreQuiz: state.scoreQuiz + 1 }));
  },
}));
