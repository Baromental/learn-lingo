import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/auth/slice';

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  console.log('🔍 isRefreshing:', isRefreshing);
  console.log('🔍 isLoggedIn:', isLoggedIn);

  if (isRefreshing) {
    return <div>Loading...</div>;
  }
  if (isLoggedIn) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/" />;
};
