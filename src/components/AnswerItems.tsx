import { useEffect, useState } from 'react';
import { useCountryContext } from '../hooks/useCountryContext';
import { usePaginateCountriesAnswer } from '../hooks/usePaginateCountriesAnswer';
import { FlatQuestion } from './FlatQuestion';
// import Check_round_fill from '/public/Check_round_fill.svg';
// import Close_round_fill from '/public/Close_round_fill.svg';

export const AnswerItems = () => {
  const [clickedButton, setClickedButton] = useState<string>('');
  const [randomIndex, setRandomIndex] = useState(0);
  const { contriesInfo, validAnswer, setValidAnswer } = useCountryContext();
  const { questionDataPaginated } = usePaginateCountriesAnswer(contriesInfo);
  //Estado creado para cuando sea respondida la pregunta, mantenga la bandera al navegar

  useEffect(() => {
    const randomPositionFlat = Math.floor(
      Math.random() * questionDataPaginated.length
    );
    console.log('randomPositionFlat', randomPositionFlat);
    setRandomIndex(randomPositionFlat);
  }, []);

  const handleClick = (commonName: string) => {
    setClickedButton(commonName);
    if (commonName === questionDataPaginated[randomIndex].name.common)
      setValidAnswer(true);
  };

  if (questionDataPaginated.length === 0) return;
  return (
    <div className="flex flex-col justify-center items-center gap-8 mt-6">
      <h3 className="flex justify-center font-medium text-xl">
        Which country does this flag
        {
          <FlatQuestion flat={questionDataPaginated[randomIndex].flags.svg} />
        }{' '}
        belong to?
      </h3>

      <div className="flex gap-8 flex-wrap justify-center w-2/3">
        {questionDataPaginated.map((answerItems, index) => (
          <button
            key={answerItems.name.common}
            disabled={clickedButton !== ''}
            onClick={() => handleClick(answerItems.name.common)}
            className="flex items-center justify-center gap-2 bg-[#393F6F] w-60 h-16 mr-2 p-2 font-medium rounded-2xl text-sm  hover:bg-gradient-to-r from-[#E65895] to-[#BC6BE8]">
            {answerItems.name.common}
            {index === randomIndex && clickedButton !== '' && (
              <img
                src="/public/Check_round_fill.svg"
                alt="Check_round_fill.svg"
              />
            )}
            {index !== randomIndex &&
              clickedButton === answerItems.name.common && (
                <img
                  src="/public/Close_round_fill.svg"
                  alt="Close_round_fill.svg"
                />
              )}
          </button>
        ))}
      </div>
    </div>
  );
};
