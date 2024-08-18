import { useEffect } from 'react';
import { useCountryStore } from '../store/CountryStore';

export const useSetRandomPosition = () => {
  const answerPage = useCountryStore((state) => state.answerPage);
  const setRandomPosition = useCountryStore((state) => state.setRandomPosition);
  useEffect(() => {
    setRandomPosition();
  }, [answerPage, setRandomPosition]);
};
