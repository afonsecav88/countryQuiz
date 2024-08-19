import '../index.css';
import { NavQuestion } from './NavQuestion';
import { Outlet } from 'react-router-dom';
import { useSetCountriesInfo } from '../hooks/useSetCountriesInfo';
import { useSetCountriesInfoPaginated } from '../hooks/useSetCountriesInfoPaginated';
import { useSetCountriesInfoToPaginate } from '../hooks/useSetCountriesInfoToPaginate';
import { useRedirectTo } from '../hooks/useRedirectTo';

export const HomeQuiz = () => {
  useSetCountriesInfo();
  useSetCountriesInfoToPaginate();
  useSetCountriesInfoPaginated();
  useRedirectTo();

  return (
    <main className="flex justify-center items-center h-5/6 text-[#E2E4F3]">
      <section className="flex flex-col items-center gap-5 pb-20 my-20 max-w-2xl md:max-w-4xl  bg-[#343964] rounded-lg">
        <h3 className="flex font-medium text-[#8B8EAB] mt-8">Country Quiz</h3>
        <NavQuestion />
        <Outlet />
      </section>
    </main>
  );
};
