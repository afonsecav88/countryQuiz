import { createBrowserRouter } from 'react-router-dom';
import { HomeQuiz } from '../HomeQuiz';
import { AnswerItems } from '../components/AnswerItems';
export const routes = createBrowserRouter([
  {
    path: '/quiz',
    element: <HomeQuiz />,
    children: [
      { path: 'question', element: <AnswerItems /> },
      { path: 'question:/id', element: <AnswerItems /> },
    ],
  },
]);
