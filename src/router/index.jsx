import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ChangeEmail from "../pages/ChangeEmail";
import ChangePassword from "../pages/ChangePassword";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import News from "../pages/News";
import RegisterAuthor from "../pages/RegisterAuthor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/news/:newsId",
    element: <News />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: '/authors/register',
    element: <RegisterAuthor />
  },
  {
    path: '/config/email',
    element: <ChangeEmail />
  },
  {
    path: '/config/password',
    element: <ChangePassword />
  },
]);

export { router };
