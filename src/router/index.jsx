import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import News from "../pages/News";

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
  }
]);

export { router };
