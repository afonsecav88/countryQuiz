import './index.css';
import { NavQuestion } from './components/NavQuestion';
import { Outlet } from 'react-router-dom';
import { useSetCountriesInfo } from './hooks/useSetCountriesInfo';
import { useSetCountriesInfoPaginated } from './hooks/useSetCountriesInfoPaginated';
import { useSetCountriesInfoToPaginate } from './hooks/useSetCountriesInfoToPaginate';

export const HomeQuiz = () => {
  useSetCountriesInfo();
  useSetCountriesInfoToPaginate();
  useSetCountriesInfoPaginated();

  return (
    <main className="flex justify-center items-center h-5/6 text-[#E2E4F3]">
      <section className="flex flex-col gap-5 pb-20 items-center max-w-2xl my-20 md:max-w-4xl  bg-[#343964] rounded-lg">
        <h3 className="flex font-medium text-[#8B8EAB] mt-4">Country Quiz</h3>
        <NavQuestion />
        <Outlet />
      </section>
    </main>
  );
};
