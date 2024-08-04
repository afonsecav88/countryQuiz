import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes.tsx';
import { CountryProvider } from './Context/CountryProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CountryProvider>
      <RouterProvider router={routes} />
    </CountryProvider>
  </React.StrictMode>
);
