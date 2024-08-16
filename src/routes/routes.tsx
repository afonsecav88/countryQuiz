import { createBrowserRouter } from 'react-router-dom';
import { HomeQuiz } from '../HomeQuiz';
import { NotFoundPAge } from '../components/NotFoundPAge';
import { AnswerCard } from '../components/AnswerCard';
import { QuizComplete } from '../components/QuizComplete';

export const routes = createBrowserRouter([
  {
    path: 'quiz/question',
    element: <HomeQuiz />,
    errorElement: <NotFoundPAge />,
    children: [
      {
        path: ':questionId',
        element: <AnswerCard />,
      },
      {
        path: '*',
        element: <NotFoundPAge />,
      },
    ],
  },
  {
    path: 'quiz/completed',
    element: <QuizComplete />,
  },
  {
    path: '*',
    element: <NotFoundPAge />,
  },
]);
