import { Outlet } from 'react-router-dom';
import { NavQuestion } from './NavQuestion';

export const QuizContainer = () => {
  return (
    <section className="flex flex-col gap-5 pt-8 items-center w-4/5 h-4/6 min-h-[480px] max-w-7xl bg-[#343964] rounded-lg ">
      <h3 className="flex font-medium text-[#8B8EAB]">Country Quiz</h3>
      <NavQuestion />
      <Outlet />
    </section>
  );
};
