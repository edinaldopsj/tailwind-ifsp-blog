import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { useCookies } from 'react-cookie';
import CodeTitle from '../CodeTitle';
import { ROUTE_NAMES } from '../../router/names';

function Navbar() {
  // eslint-disable-next-line no-unused-vars
  const [cookie] = useCookies(['token']);
  const roles = {
    isAdmin: false,
    isReader: true,
    isAuthor: true,
  };

  const isLoggedIn = cookie?.token ?? false;

  return (
    <main>
      <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-2">
        <h1 className="w-3/12">
          <Link
            to={ROUTE_NAMES.ROOT}
            className="flex gap-1 items-baseline p-4 text-xl font-semibold border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer active"
          >
            <CodeTitle title="IFSP - Notícias" />
          </Link>
        </h1>

        <nav className="nav font-semibold text-md md:text-lg">
          <ul className="flex flex-col md:flex-row items-center">
            <li>
              <Link
                to={ROUTE_NAMES.ROOT}
                className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer active"
              >
                ver Últimas News
              </Link>
            </li>
            <li>
              <Link
                className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer active"
                to={ROUTE_NAMES.NEWS_BY_AUTHOR}
              >
                ver Por Apelido
              </Link>
            </li>

            {isLoggedIn ? (
              <li>
                <Link
                  to={`/author/${cookie?.token?.id}/news/list`}
                  className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer"
                >
                  minhas News
                </Link>
              </li>
            ) : null}

            {/* ADMIN */}
            {roles.isAdmin ? (
              <>
                <li>
                  <Link
                    to={ROUTE_NAMES.ROOT}
                    className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer"
                  >
                    ver Usuários
                  </Link>
                </li>
                <li>
                  <Link
                    to={ROUTE_NAMES.ROOT}
                    className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer"
                  >
                    ver Notícias
                  </Link>
                </li>
              </>
            ) : null}
          </ul>
        </nav>

        <div className="w-3/12 flex justify-end">
          {isLoggedIn ? (
            <Link
              to="/logout"
              className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer"
            >
              Sair
            </Link>
          ) : (
            <>
              <Link
                className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer"
                to={ROUTE_NAMES.READERS_CREATE}
              >
                Cadastrar
              </Link>
              <Link
                className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer"
                to={ROUTE_NAMES.LOGIN}
              >
                Login
              </Link>
            </>
          )}
        </div>
      </header>
      <Outlet />
    </main>
  );
}

export default Navbar;
