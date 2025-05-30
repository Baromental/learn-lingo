import { Layout } from 'components/Navbar/Layout';
import { Favorites } from 'pages/Favorites/Favorites';
import { Home } from 'pages/Home/Home';
import { Teachers } from 'pages/Teachers/Teachers';
import React from 'react';
import { Route, Routes } from 'react-router';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
};

export default App;
