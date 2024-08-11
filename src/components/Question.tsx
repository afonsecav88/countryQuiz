import { FlatQuestion } from './FlatQuestion';
import { useCountryContext } from '../hooks/useCountryContext';

export const Question = () => {
  // const [randomIndex, setRandomIndex] = useState(0);
  const { answerPageData } = useCountryContext();

  // const randomPositionFlat = () => {
  const randomPosition = Math.floor(Math.random() * answerPageData.length);
  // };

  // setRandomIndex(randomPosition);
  return (
    <>
      <h3 className="flex justify-center font-medium text-xl">
        Which country does this flag
        {<FlatQuestion flat={answerPageData[randomPosition].flags.svg} />}
        belong to?
      </h3>
    </>
  );
};
