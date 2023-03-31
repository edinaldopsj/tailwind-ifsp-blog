import { Link, useRouteError } from "react-router-dom";
import { LANG } from "../../lang/pt-br";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <main className="flex flex-col text-center justify-center h-screen gap-4">
      <header>
        <h1 className="text-3xl">Oops!</h1>
      </header>
      <section>
        <p className="text-2xl">Um erro inesperado aconteceu!</p>
        <p className="text-xl pt-3">
          <i>{error.status ? "404 - Não encontrado" : null}</i>
        </p>

        <p className="mt-5">
          <Link className="text-xl" to={'/'}>{LANG.ERROR.BACK}</Link>
        </p>
      </section>
    </main>
  );
}
