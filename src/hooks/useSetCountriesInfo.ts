import { useEffect } from 'react';
import { useCountryStore } from '../store/CountryStore';

export const useSetCountriesInfo = () => {
  const countries = useCountryStore((state) => state.setCountriesInfo);
  useEffect(() => {
    countries();
  }, []);
};
