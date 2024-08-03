import { createBrowserRouter } from 'react-router-dom';
import { HomeQuiz } from '../HomeQuiz';
import { Question1 } from '../components/Question1';
export const routes = createBrowserRouter([
  {
    path: '/quiz',
    element: <HomeQuiz />,
    children: [{ path: 'question1', element: <Question1 /> }],
  },
]);
