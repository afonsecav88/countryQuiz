import { Question } from './Question';

export const AnswerItems = () => {
  // const [clickedButton, setClickedButton] = useState<string>('');
  // const [randomIndex, setRandomIndex] = useState(0);
  // const { contriesInfo, answerPage } = useCountryContext();
  // const questionDataPaginated = usePaginateCountriesAnswer(contriesInfo);
  // const [validAnswer, seValidAnswer] = useState<Countries[]>(
  //   questionDataPaginated.map((prevState) => ({
  //     ...prevState,
  //     validQuestion: prevState.validQuestion === false,
  //   }))
  // );
  // console.log('validAnswer', validAnswer);

  // //Estado creado para cuando sea respondida la pregunta, mantenga la bandera al navegar
  // const randomPositionFlat = () => {
  //   const randomPosition = Math.floor(
  //     Math.random() * validAnswer.length
  //   );
  //   setRandomIndex(randomPosition);
  // };

  // useEffect(() => {
  //   randomPositionFlat();
  // }, [answerPage]);

  // const handleClick = (commonName: string, index: number) => {
  //   setClickedButton(commonName);
  //   seValidAnswer((prevState) =>
  //     prevState.map((state, i) =>
  //       i === index ? { ...state, validQuestion: !state.validQuestion } : state
  //     )
  //   );
  // };

  // if (questionDataPaginated.length === 0) return;
  return (
    <div className="flex flex-col justify-center items-center gap-8 mt-6">
      <Question />
      {/* <div className="flex gap-8 flex-wrap justify-center w-2/3">
        {validAnswer.map((answerItems, index) => (
          <button
            key={answerItems.name.common}
            // disabled={clickedButton !== ''}
            onClick={() => handleClick(answerItems.name.common, index)}
            className="flex items-center justify-center gap-2 bg-[#393F6F] w-60 h-16 mr-2 p-2 font-medium rounded-2xl text-sm  hover:bg-gradient-to-r from-[#E65895] to-[#BC6BE8]">
            {answerItems.name.common}
            {index === randomIndex && clickedButton !== '' && (
              <img src="/Check_round_fill.svg" alt="Check_round_fill.svg" />
            )}
            {index !== randomIndex &&
              clickedButton === answerItems.name.common && (
                <img src="/Close_round_fill.svg" alt="Close_round_fill.svg" />
              )}
          </button>
        ))}
      </div> */}
    </div>
  );
};
