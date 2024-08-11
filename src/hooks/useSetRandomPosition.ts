import { useEffect } from 'react';
import { useCountryStore } from '../store/CountryStore';

export const useSetRandomPosition = () => {
  const setRandomPosition = useCountryStore((state) => state.setRandomPosition);
  const answerPage = useCountryStore((state) => state.answerPage);
  useEffect(() => {
    setRandomPosition();
  }, [answerPage]);
};
