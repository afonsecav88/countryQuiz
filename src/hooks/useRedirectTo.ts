import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useRedirectTo = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      return navigate('/quiz/question/1');
    }
  }, [navigate, pathname]);
};
