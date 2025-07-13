import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { selectIsLoggedIn } from '../redux/auth/slice';

export const PublicRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to={location.state?.from || '/'} replace={true} />;
  }
  return children;
};
