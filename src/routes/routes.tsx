import { createBrowserRouter } from 'react-router-dom';
import { HomeQuiz } from '../components/HomeQuiz';
import { AnswerCard } from '../components/AnswerCard';
import { QuizComplete } from '../components/QuizComplete';
import { NotFoundPage } from '../components/NotFoundPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeQuiz />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: 'quiz/question/:questionId',
        element: <AnswerCard />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: 'quiz/completed',
    element: <QuizComplete />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
