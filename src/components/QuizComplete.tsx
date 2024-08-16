import { useNavigate } from 'react-router-dom';
import { useCountryStore } from '../store/CountryStore';
export const QuizComplete = () => {
  const navigate = useNavigate();
  const scoreQuiz = useCountryStore((state) => state.scoreQuiz);
  const countriesInfo = useCountryStore((state) => state.countriesInfo);

  const handleClick = () => {
    navigate(`/quiz/question/1`, { replace: true });
    window.location.reload();
  };

  console.log(countriesInfo);
  return (
    <div className="flex items-center justify-center min-h-screen text-[#E2E4F3]">
      <div className="flex flex-col justify-center items-center bg-[#343963] w-80 h-auto rounded-xl">
        <div>
          <img src="/congrats.svg" alt="congrats" className="max-w-full p-4" />
        </div>
        <h1 className="flex items-center justify-center text-center text-xl mt-3 max-w-64">
          Congrats! You completed the quiz.
        </h1>
        <p className="text-sm mt-3">You answer {scoreQuiz}/10 correctly</p>
        <button
          onClick={handleClick}
          className="flex items-center justify-center mt-10 mb-10 rounded-md w-48 p-4 h-12 mr-2 text-sm bg-gradient-to-r from-[#E65895] to-[#BC6BE8]">
          Play again
        </button>
      </div>
    </div>
  );
};
