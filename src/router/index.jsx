import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import RegisterAdmin from '../pages/RegisterAdmin';
import RegisterAuthor from '../pages/RegisterAuthor';
import ChangePassword from '../pages/User/ChangePassword';
import Edit from '../pages/User/Edit';
import RegisterReader from '../pages/RegisterReader';
import NewsPage from '../pages/NewsPage';
import List from '../pages/RegisterNews/List';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/news/:newsId',
    element: <NewsPage />,
  },
  {
    path: '/news/:newsId/list', // TODO: change route name
    element: <List />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/authors/register',
    element: <RegisterAuthor />,
  },
  {
    path: '/user/edit',
    element: <Edit />,
  },
  {
    path: '/user/password',
    element: <ChangePassword />,
  },
  {
    path: '/readers/register',
    element: <RegisterReader />,
  },
  {
    path: '/admin/register',
    element: <RegisterAdmin />,
  },
]);

export { router };
