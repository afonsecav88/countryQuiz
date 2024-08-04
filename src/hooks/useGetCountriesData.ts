import { useEffect } from 'react';
import { countryService } from '../services/countryService';
import { Countries } from '../Interfaces/CountryInterface';
import { useCountryContext } from './useCountryContext';

export const useGetCountriesData = () => {
  const { setContriesInfo } = useCountryContext();

  useEffect(() => {
    const countriesData = countryService();
    countriesData.then((data: Countries[] | undefined) => {
      if (data === undefined) return;
      else {
        const shuffledData = data.sort(() => Math.random() - 0.5);
        setContriesInfo(shuffledData);
      }
    });
  }, []);
};
