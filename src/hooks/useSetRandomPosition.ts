import { useEffect } from 'react';
import { useCountryStore } from '../store/CountryStore';

export const useSetRandomPosition = () => {
  const setRandomPosition = useCountryStore((state) => state.setRandomPosition);
  useEffect(() => {
    setRandomPosition();
  }, []);
};
