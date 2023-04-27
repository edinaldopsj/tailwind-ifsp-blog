import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LANG } from '../../lang/pt-br';

function ErrorPage({ message }) {
  return (
    <main className="flex flex-col text-center justify-center h-screen gap-4">
      <header>
        <h1 className="text-3xl">Oops!</h1>
      </header>
      <section>
        <p className="text-2xl">Um erro inesperado aconteceu!</p>
        <p className="text-xl pt-3">
          <i>{message ?? '404 - Não encontrado'}</i>
        </p>

        <p className="mt-5">
          <Link className="text-xl" to="/">{LANG.ERROR.BACK}</Link>
        </p>
      </section>
    </main>
  );
}

ErrorPage.propTypes = {
  message: PropTypes.string,
};

ErrorPage.defaultProps = {
  message: '',
};

export default ErrorPage;
