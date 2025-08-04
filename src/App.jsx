import { Layout } from 'components/Navbar/Layout';
import { Favorites } from 'pages/Favorites/Favorites';
import { Home } from 'pages/Home/Home';
import { Teachers } from 'pages/Teachers/Teachers';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import { selectAuthInitialized } from './redux/auth/slice';
import { refreshThunk } from './redux/auth/operations';
import { PrivateRoute } from 'routes/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  const isAuthInitialized = useSelector(selectAuthInitialized);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  if (!isAuthInitialized) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};
export default App;
