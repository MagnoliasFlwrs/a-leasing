import { useSelector } from "react-redux";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const notAuthRoutes = [
  {
    path: "login",
    element: <p>страница авторизации</p>,
  },
  {
    path: "*",
    element: <Navigate replace to="login" />,
  },
];

const NotAuthRouter = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (isAuth) return null;

  const router = createBrowserRouter(notAuthRoutes);

  return <RouterProvider router={router} />;
};

export default NotAuthRouter;
