import { useNavigate } from 'react-router-dom';

export const NotFoundPAge = () => {
  const navigate = useNavigate();
  return (
    <div>
      No existe la pagina{' '}
      <button onClick={() => navigate('/quiz/question/1')}>Regresar</button>
    </div>
  );
};
