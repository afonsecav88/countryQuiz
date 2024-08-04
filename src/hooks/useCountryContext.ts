import { useContext } from 'react';
import { CountryContext } from '../Context/CountryContext';
import { CountriesState } from '../Interfaces/CountriesState';

export const useCountryContext = (): CountriesState => {
  return useContext(CountryContext);
};
