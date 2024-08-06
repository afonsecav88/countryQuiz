import { createBrowserRouter } from 'react-router-dom';
import { HomeQuiz } from '../HomeQuiz';
import { AnswerItems } from '../components/AnswerItems';
import { NotFoundPAge } from '../components/NotFoundPAge';
export const routes = createBrowserRouter([
  {
    path: '/quiz',
    element: <HomeQuiz />,
    errorElement: <NotFoundPAge />,
    children: [
      { path: 'question', element: <AnswerItems /> },
      { path: 'question/:questionId', element: <AnswerItems /> },
    ],
  },
]);
