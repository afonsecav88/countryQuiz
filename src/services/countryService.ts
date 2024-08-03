import { Countries } from '../Interfaces/CountryInterface';

const urlApi = `https://restcountries.com/v3.1/all?fields=name,flags`;

export const countryService = async () => {
  try {
    const contryInfo = await fetch(urlApi);
    const resp: Countries[] = await contryInfo.json();
    return resp ?? [];
    // console.log(resp);
  } catch (error) {
    console.log(error);
  }
};
