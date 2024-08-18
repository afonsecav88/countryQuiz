import { useEffect } from 'react';
import { useCountryStore } from '../store/CountryStore';

export const useSetCountriesInfoPaginated = () => {
  const countriesInfoToPaginate = useCountryStore(
    (state) => state.countriesInfoToPaginated
  );
  const paginatedCountriesInfo = useCountryStore(
    (state) => state.paginatedCountriesInfo
  );
  const answerPage = useCountryStore((state) => state.answerPage);
  useEffect(() => {
    paginatedCountriesInfo(answerPage, countriesInfoToPaginate);
  }, [answerPage, countriesInfoToPaginate, paginatedCountriesInfo]);
};
