import './index.css';
import { NavQuestion } from './components/NavQuestion';
import { Outlet } from 'react-router-dom';
import { useGetCountriesData } from './hooks/useGetCountriesData';

export const HomeQuiz = () => {
  useGetCountriesData();
  return (
    <main className="flex justify-center items-center h-screen text-[#E2E4F3]">
      <section className="flex flex-col gap-5 pt-8 items-center w-4/5 h-4/6 min-h-[480px] max-w-7xl bg-[#343964] rounded-lg ">
        <h3 className="flex font-medium text-[#8B8EAB]">Country Quiz</h3>
        <NavQuestion />
        <Outlet />
      </section>
    </main>
  );
};
