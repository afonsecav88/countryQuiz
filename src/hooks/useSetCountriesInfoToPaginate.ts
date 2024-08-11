import { useEffect } from 'react';
import { useCountryStore } from '../store/CountryStore';

export const useSetCountriesInfoToPaginate = () => {
  const countriesInfo = useCountryStore((state) => state.CountriesInfo);
  const setCountriesInfoToPaginated = useCountryStore(
    (state) => state.setCountriesInfoToPaginated
  );
  useEffect(() => {
    setCountriesInfoToPaginated(countriesInfo);
  }, [countriesInfo, setCountriesInfoToPaginated]);
};
