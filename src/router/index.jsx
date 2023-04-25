import React from 'react';
import App from '../App';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import RegisterAdmin from '../pages/RegisterAdmin';
import RegisterAuthor from '../pages/RegisterAuthor';
import ChangePassword from '../pages/User/ChangePassword';
import Edit from '../pages/User/Edit';
import RegisterReader from '../pages/RegisterReader';
import NewsPage from '../pages/NewsPage';
import RegisterNews from '../pages/RegisterNews';
import UsersList from '../pages/User/List';
import AuthorList from '../pages/AuthorList';

const routerErrorElement = <ErrorPage />;

const router = ([
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
    path: '/news/list',
    element: <RegisterNews />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/authors/new',
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
    path: '/readers/new',
    element: <RegisterReader />,
  },
  {
    path: '/admin/new',
    element: <RegisterAdmin />,
  },
  {
    path: '/user/list',
    element: <UsersList />,
  },
  {
    path: '/news/by/:authorName?',
    element: <AuthorList />,
  },
]);

export { router, routerErrorElement };
