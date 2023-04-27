/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { LANG } from '../../lang/pt-br';

function Logout() {
  // eslint-disable-next-line no-unused-vars
  const [cookie, setCookies, removeCookies] = useCookies();

  useEffect(() => {
    removeCookies('token');
  }, []);

  return (
    <main className="flex flex-col text-center justify-center h-screen gap-4">
      <header>
        <h1 className="text-3xl">Até logo!</h1>
      </header>
      <section>
        <p className="text-xl pt-3">
          <i>Você saiu do sistema!</i>
        </p>

        <p className="mt-5">
          <Link className="text-xl" to="/">
            {LANG.ERROR.BACK}
          </Link>
        </p>
      </section>
    </main>
  );
}

export default Logout;
