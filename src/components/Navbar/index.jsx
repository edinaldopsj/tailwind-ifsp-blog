import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import CodeTitle from '../CodeTitle';

function Navbar() {
  const roles = {
    isAdmin: false,
    isReader: true,
    isAuthor: false,
  };

  const isLoggedIn = false;

  return (
    <main>
      <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
        <h1 className="w-3/12">
          <Link to="/" className="flex gap-1 items-baseline p-4 text-xl font-semibold border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer active">
            <CodeTitle title="IFSP - Notícias" />
          </Link>
        </h1>

        <nav className="nav font-semibold text-lg">
          <ul className="flex items-center">
            <li>
              <Link className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer active" to="/">
                ver Últimas News
              </Link>
            </li>
            <li>
              <Link className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer active" to="/news/by">ver Por Apelido</Link>
            </li>

            {isLoggedIn
              ? (
                <li>
                  <Link to="/news/list" className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
                    minhas News
                  </Link>
                </li>
              )
              : null}

            {/* ADMIN */}
            {roles.isAdmin ? (
              <>
                <li>
                  <Link to="/" className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">ver Usuários</Link>
                </li>
                <li>
                  <Link to="/" className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">ver Notícias</Link>
                </li>
              </>
            ) : null}
          </ul>
        </nav>

        <div className="w-3/12 flex justify-end">
          {
          isLoggedIn ? (
            <a href="/" className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer">
              sair
            </a>
          ) : (
            <>
              <Link className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer" to="/readers/new">
                Cadastrar
              </Link>
              <Link className="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:text-blue-500 duration-200 cursor-pointer" to="/login">
                Login
              </Link>
            </>
          )
        }
        </div>
      </header>
      <Outlet />
    </main>
  );
}

export default Navbar;
