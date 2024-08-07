import { createBrowserRouter } from 'react-router-dom';
import { HomeQuiz } from '../HomeQuiz';
import { AnswerItems } from '../components/AnswerItems';
import { NotFoundPAge } from '../components/NotFoundPAge';
import { AnswerCard } from '../components/AnswerCard';
export const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeQuiz />,
    errorElement: <NotFoundPAge />,
    children: [
      {
        path: 'quiz',
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
]);
