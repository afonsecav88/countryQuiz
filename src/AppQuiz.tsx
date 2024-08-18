import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';

export const AppQuiz = () => {
  return <RouterProvider router={routes} />;
};
