import React from 'react';
import { createBrowserRouter, defer } from 'react-router-dom';

import { ROUTE_NAMES } from './names';
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
import RegisterReaderPage from '../pages/RegisterReader';
import CreateNewsPage from '../pages/RegisterNews/CreatePage';
import UserListPage from '../pages/User/List/page';

import NavBar from '../components/Navbar';

import {
  getNews, getNewsByAuthor, getNewsByAuthors, getNewsItem,
} from '../providers/news/site';
import { getUserNews, getUserNewsItem } from '../providers/news/user';
import { getAllUsers } from '../providers/admin';
import Logout from '../pages/Logout';

const routerErrorElement = <ErrorPage />;

const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: ROUTE_NAMES.ROOT,
        element: <App />,
        loader: async () => defer({
          news: getNews(),
        }),
      },
      {
        path: ROUTE_NAMES.ADMIN_CREATE,
        element: <RegisterAdmin />,
      },
      {
        path: ROUTE_NAMES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTE_NAMES.AUTHOR_CREATE,
        element: <RegisterAuthor />,
      },
      {
        path: ROUTE_NAMES.NEWS_VIEW_BY_ID,
        element: <NewsPage />,
        loader: async ({ params }) => defer({
          newsItem: getNewsItem(params?.newsId),
        }),
      },
      {
        path: ROUTE_NAMES.NEWS_BY_AUTHOR_ID_ROUTER,
        element: <AuthorList />,
        loader: async ({ params }) => defer({
          authors: !params?.authorName ? getNewsByAuthors() : [],
          news: params?.authorName ? getNewsByAuthor(params?.authorName) : [],
        }),
      },
      {
        path: ROUTE_NAMES.READERS_CREATE,
        element: <RegisterReaderPage />,
      },
      {
        path: ROUTE_NAMES.AUTHOR_LIST_NEWS_ROUTER,
        element: <RegisterNews />,
        loader: async ({ params }) => defer({
          news: getUserNews(params?.authorId),
        }),
      },
      {
        path: ROUTE_NAMES.AUTHOR_CREATE_NEWS,
        element: <CreateNewsPage />,
        loader: async () => defer({
          news: {},
        }),
      },
      {
        path: ROUTE_NAMES.AUTHOR_EDIT_ROUTER,
        element: <CreateNewsPage />,
        loader: async ({ params }) => defer({
          news: getUserNewsItem(params?.newsId),
        }),
      },
      {
        path: ROUTE_NAMES.ADMIN_USER_LIST,
        element: <UserListPage />,
        loader: async () => defer({
          users: getAllUsers(),
        }),
      },
      {
        path: ROUTE_NAMES.ADMIN_USER_EDIT,
        element: <Edit />,
      },
      {
        path: ROUTE_NAMES.USER_PASSWORD,
        element: <ChangePassword />,
      },
      {
        path: ROUTE_NAMES.LOGOUT,
        element: <Logout />,
      },
    ],
  },
]);

export { router, routerErrorElement };
