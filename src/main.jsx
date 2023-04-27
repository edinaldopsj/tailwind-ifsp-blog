import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { router } from './router';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookiesProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </CookiesProvider>
  </React.StrictMode>,
);
