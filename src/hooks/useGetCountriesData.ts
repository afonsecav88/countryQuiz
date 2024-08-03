import { useEffect, useState } from 'react';
import { countryService } from '../services/countryService';
import { Countries } from '../Interfaces/CountryInterface';

export const useGetCountriesData = () => {
  const [contriesInfo, setContriesInfo] = useState<Countries[]>([]);

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

  return { contriesInfo };
};
