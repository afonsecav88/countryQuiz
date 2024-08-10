import { navQuestionItems } from '../routes/navQuestionItems';
import { useQuestionPageNavigate } from '../hooks/useQuestionPageNavigate';

export const NavQuestionItem = () => {
  const { navigateAndUpdateAnwerPage } = useQuestionPageNavigate();
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
