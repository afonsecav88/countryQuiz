import { useEffect } from 'react';
import { useCountryStore } from '../store/CountryStore';

export const useSetCountriesInfoPaginated = () => {
  const countriesInfoToPaginate = useCountryStore(
    (state) => state.CountriesInfoToPaginated
  );
  const answerPage = useCountryStore((state) => state.answerPage);
  const paginatedCountriesInfo = useCountryStore(
    (state) => state.paginatedCountriesInfo
  );
  useEffect(() => {
    paginatedCountriesInfo(answerPage, countriesInfoToPaginate);
  }, [answerPage, countriesInfoToPaginate, paginatedCountriesInfo]);
};
