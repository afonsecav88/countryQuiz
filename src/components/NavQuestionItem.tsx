import { navQuestionItems } from '../routes/navQuestionItems';
import { useNavigate } from 'react-router-dom';
import { useCountryStore } from '../store/CountryStore';

export const NavQuestionItem = () => {
  const navigate = useNavigate();
  const updatePageAnswer = useCountryStore((state) => state.updatePageAnswer);
  const navigatedPages = useCountryStore((state) => state.navigatedPages);

  console.log(navigatedPages);
  return (
    <ul className="flex">
      {navQuestionItems.map((navItem, index) => (
        <button
          onClick={() => updatePageAnswer(navigate, navItem.id)}
          key={navItem.id}
          disabled={navigatedPages[index] !== true}
          className={`flex items-center justify-center rounded-full w-12 h-12 mr-2 font-medium hover:bg-[#8B8EAB]
             ${
               navigatedPages[index] === true
                 ? 'bg-gradient-to-r from-[#E65895] to-[#BC6BE8]'
                 : 'bg-[#393F6E]'
             }
             `}>
          {navItem.id}
        </button>
      ))}
    </ul>
  );
};
