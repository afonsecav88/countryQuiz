import { createBrowserRouter } from 'react-router-dom';
import { HomeQuiz } from '../HomeQuiz';
import { NotFoundPAge } from '../components/NotFoundPAge';
import { AnswerCard } from '../components/AnswerCard';
import { QuizComplete } from '../components/QuizComplete';
import { AnswerItems } from '../components/AnswerItems';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeQuiz />,
    errorElement: <NotFoundPAge />,
    children: [
      {
        path: 'quiz/question',
        element: <AnswerCard />,
        children: [
          {
            path: ':questionId',
            element: <AnswerItems />,
          },
        ],
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
