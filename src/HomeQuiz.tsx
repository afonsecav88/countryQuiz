import './index.css';
import { QuizContainer } from './components/QuizContainer';
import { useGetCountriesData } from './hooks/useGetCountriesData';

export const HomeQuiz = () => {
  const { contriesInfo } = useGetCountriesData();
  console.log(contriesInfo[0]);
  return (
    <main className="flex justify-center items-center h-screen text-[#E2E4F3]">
      <QuizContainer />
    </main>
  );
};
