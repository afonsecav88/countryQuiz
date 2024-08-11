import { navQuestionItems } from '../routes/navQuestionItems';
import { useNavigate } from 'react-router-dom';
import { useCountryStore } from '../store/CountryStore';

export const NavQuestionItem = () => {
  const navigate = useNavigate();
  const updatePageAnswer = useCountryStore((state) => state.updatePageAnswer);
  return (
    <ul className="flex">
      {navQuestionItems.map((navItem) => (
        <button
          onClick={() => updatePageAnswer(navigate, navItem.id)}
          key={navItem.id}
          className="flex items-center justify-center rounded-full bg-[#393F6E] w-12 h-12 mr-2 font-medium">
          {' '}
          {navItem.name}
        </button>
      ))}
    </ul>
  );
};
