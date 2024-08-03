import { NavLink } from 'react-router-dom';
import { navQuestionItems } from '../routes/navQuestionItems';

export const NavQuestionItem = () => {
  return (
    <ul className="flex">
      {navQuestionItems.map((navItem) => (
        <NavLink
          to={navItem.path}
          key={navItem.id}
          className="flex items-center justify-center rounded-full bg-[#393F6E] w-12 h-12 mr-2 font-medium">
          {' '}
          {navItem.name}
        </NavLink>
      ))}
    </ul>
  );
};
