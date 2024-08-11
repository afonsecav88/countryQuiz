import { useEffect } from 'react';
import { useCountryStore } from '../store/CountryStore';

export const useGetCountriesData = () => {
  const countries = useCountryStore((state) => state.setCountriesInfo);
  useEffect(() => {
    countries();
  }, [countries]);
};
