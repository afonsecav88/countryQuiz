import { useEffect, useState } from 'react';
import { useCountryContext } from '../hooks/useCountryContext';
import { usePaginateCountriesAnswer } from '../hooks/usePaginateCountriesAnswer';
import { FlatQuestion } from './FlatQuestion';
import Check_round_fill from '/public/Check_round_fill.svg';
import Close_round_fill from '/public/Close_round_fill.svg';

export const AnswerItems = () => {
  let imageAnswer: string;

  const { contriesInfo, validAnswer, setValidAnswer } = useCountryContext();
  const { questionDataPaginated } = usePaginateCountriesAnswer(contriesInfo);
  //Estado creado para cuando sea respondida la pregunta, mantenga la bandera al navegar
  const [randomIndex, setRandomIndex] = useState(0);

  //si la pregunta se respondio no debo poner una bandera aleatoria
  const randomPositionFlat = Math.floor(
    Math.random() * questionDataPaginated.length
  );

  useEffect(() => {
    setRandomIndex(randomPositionFlat);
  }, []);

  const handleClick = (commonName: string) => {
    if (commonName === questionDataPaginated[randomPositionFlat].name.common) {
      setValidAnswer(true);
      imageAnswer === Check_round_fill;
    } else imageAnswer === Close_round_fill;
  };

  if (questionDataPaginated.length === 0) return;
  console.log(questionDataPaginated);
  return (
    <div className="flex flex-col justify-center items-center gap-8 mt-6">
      <h3 className="flex justify-center font-medium text-xl">
        Which country does this flag
        {
          <FlatQuestion
            flat={questionDataPaginated[randomPositionFlat].flags.svg}
          />
        }{' '}
        belong to?
      </h3>

      <div className="flex gap-8 flex-wrap justify-center w-2/3">
        {questionDataPaginated.map((answerItems, index) => (
          <button
            key={answerItems.name.official}
            disabled={validAnswer === true}
            onClick={() => handleClick(answerItems.name.common)}
            className="flex items-center justify-center gap-2 bg-[#393F6F] w-60 h-16 mr-2 p-2 font-medium rounded-2xl text-sm  hover:bg-gradient-to-r from-[#E65895] to-[#BC6BE8]">
            {answerItems.name.common}
            {index == randomPositionFlat && (
              <img src="/public/Check_round_fill.svg" alt="" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
