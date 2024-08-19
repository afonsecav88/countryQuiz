import { createBrowserRouter } from 'react-router-dom';
import { HomeQuiz } from '../components/HomeQuiz';
import { AnswerCard } from '../components/AnswerCard';
import { QuizComplete } from '../components/QuizComplete';
import { NotFound } from '../components/NotFound';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeQuiz />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'quiz/question/:questionId',
        element: <AnswerCard />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: 'quiz/completed',
    element: <QuizComplete />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
