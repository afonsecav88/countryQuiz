import { createBrowserRouter } from 'react-router-dom';
import { HomeQuiz } from '../HomeQuiz';
import { AnswerItems } from '../components/AnswerItems';
import { NotFoundPAge } from '../components/NotFoundPAge';
import { AnswerCard } from '../components/AnswerCard';
import { QuizComplete } from '../components/QuizComplete';

export const routes = createBrowserRouter([
  {
    path: 'quiz',
    element: <HomeQuiz />,
    errorElement: <NotFoundPAge />,
    children: [
      {
        path: '/quiz',
        element: <AnswerCard />,
        children: [
          {
            path: 'question/:questionId',
            element: <AnswerItems />,
          },
        ],
      },
    ],
  },
  {
    path: 'quiz/completed',
    element: <QuizComplete />,
  },
]);
