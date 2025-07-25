import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import './index.css';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/learn-lingo">
    <Provider store={store}>
      <App />
      <ToastContainer autoClose={1500} />
    </Provider>
  </BrowserRouter>
);
