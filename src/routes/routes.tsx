import { createBrowserRouter } from 'react-router-dom';
import { HomeQuiz } from '../HomeQuiz';
import { AnswerItems } from '../components/AnswerItems';
import { NotFoundPAge } from '../components/NotFoundPAge';
export const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeQuiz />,
    errorElement: <NotFoundPAge />,
    children: [
      {
        path: 'quiz',
        element: <AnswerItems />,
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
