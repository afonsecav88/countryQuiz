import { navQuestionItems } from '../routes/navQuestionItems';

export const NavQuestion = () => {
  return (
    <>
      {navQuestionItems.map((navItem) => (
        <div key={navItem.id} className="rounded-full">
          {' '}
          {navItem.name}
        </div>
      ))}
    </>
  );
};
