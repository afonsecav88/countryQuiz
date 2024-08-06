import { useNavigate } from 'react-router-dom';
import { navQuestionItems } from '../routes/navQuestionItems';
import { useCountryContext } from '../hooks/useCountryContext';

export const NavQuestionItem = () => {
  const { setAnswerPage } = useCountryContext();
  const navigateAndUpdateAnwerPage = (questionId: number) => {
    setAnswerPage(questionId);
    console.log('questionID', questionId);
    navigate(`/quiz/question/${questionId}`);
  };

  const navigate = useNavigate();
  return (
    <ul className="flex">
      {navQuestionItems.map((navItem) => (
        <button
          onClick={() => navigateAndUpdateAnwerPage(navItem.id)}
          key={navItem.id}
          className="flex items-center justify-center rounded-full bg-[#393F6E] w-12 h-12 mr-2 font-medium">
          {' '}
          {navItem.name}
        </button>
      ))}
    </ul>
  );
};
