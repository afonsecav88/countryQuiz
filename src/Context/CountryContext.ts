import { createContext } from 'react';
import { CountriesState } from '../Interfaces/CountriesState';

export const CountryContext = createContext({} as CountriesState);
