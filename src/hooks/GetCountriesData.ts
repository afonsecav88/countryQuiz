import { useState } from 'react';
import { countryService } from '../services/countryService';
import { Countries } from '../Interfaces/CountryInterface';

export const GetCountriesData = () => {
  const [contriesInfo, setContriesInfo] = useState<Countries[]>([]);
  const countriesData = countryService();
  countriesData.then((data) => {
    if (data === undefined) return;
    else {
      setContriesInfo(data);
    }
  });
  return { contriesInfo };
};
