import { Layout } from 'components/Navbar/Layout';
import { Favorites } from 'pages/Favorites/Favorites';
import { Home } from 'pages/Home/Home';
import { Teachers } from 'pages/Teachers/Teachers';
import React from 'react';

const App = () => {
  return (
    <div>
      <Layout />
      <Home />
      <Teachers />
      <Favorites />
    </div>
  );
};

export default App;
