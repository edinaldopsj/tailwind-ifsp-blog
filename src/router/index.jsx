import React from 'react';
import { createBrowserRouter, defer } from 'react-router-dom';

import App from '../App';
import AuthorList from '../pages/AuthorList';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import RegisterAdmin from '../pages/RegisterAdmin';
import RegisterAuthor from '../pages/RegisterAuthor';
import ChangePassword from '../pages/User/ChangePassword';
import Edit from '../pages/User/Edit';
import NewsPage from '../pages/NewsPage';
import RegisterNews from '../pages/RegisterNews';
import UsersList from '../pages/User/List';
import RegisterReaderPage from '../pages/RegisterReader';

import NavBar from '../components/Navbar';

import {
  getNews, getNewsByAuthor, getNewsByAuthors, getNewsItem,
} from '../providers/news/site';
import { getUserNews } from '../providers/news/user';
import CreateNewsPage from '../pages/RegisterNews/CreatePage';

const routerErrorElement = <ErrorPage />;

const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: '/',
        element: <App />,
        loader: async () => defer({
          news: getNews(),
        }),
      },
      {
        path: '/admin/new',
        element: <RegisterAdmin />,
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
        path: '/readers/new',
        element: <RegisterReaderPage />,
      },
      {
        path: '/news/:newsId',
        element: <NewsPage />,
        loader: async ({ params }) => defer({
          newsItem: getNewsItem(params?.newsId),
        }),
      },
      {
        path: '/news/list',
        element: <RegisterNews />,
        loader: async () => defer({
          news: getUserNews(),
        }),
      },
      {
        path: '/news/create',
        element: <CreateNewsPage />,
      },
      {
        path: '/news/by/:authorName?',
        element: <AuthorList />,
        loader: async ({ params }) => defer({
          authors: !params?.authorName ? getNewsByAuthors() : [],
          news: params?.authorName ? getNewsByAuthor(params?.authorName) : [],
        }),
      },
      {
        path: '/user/list',
        element: <UsersList />,
      },
      {
        path: '/user/edit',
        element: <Edit />,
      },
      {
        path: '/user/password',
        element: <ChangePassword />,
      },
    ],
  },
]);

export { router, routerErrorElement };
