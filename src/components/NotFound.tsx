import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <p> 🤔 No existe la página !!! </p>
      <button
        className="flex items-center justify-center  rounded-md w-35 p-4 h-10 mr-2 text-sm bg-gradient-to-r from-[#E65895] to-[#BC6BE8]"
        onClick={() => navigate('/quiz/question/1')}>
        <span className="inline-flex">⬅️ Regresar</span>
      </button>
    </>
  );
};
