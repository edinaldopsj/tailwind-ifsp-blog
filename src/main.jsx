import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { router, routerErrorElement } from './router';
import Navbar from './components/Navbar';
import App from './App';

import './index.css';
import ErrorPage from './pages/ErrorPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<App />} />

          {router.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
              errorElement={routerErrorElement}
            />
          ))}
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
