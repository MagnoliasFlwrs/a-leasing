import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../routes/MainLayout";
import ContractsLayout from "../routes/ContractsLayout";
import ContractsMobileLayout from "../routes/ContractsMobileLayout";
import ProfileLayout from "../routes/ProfileLayout";
import ApplicationDetailsLayout from "../routes/ApplicationDetailsLayout";
import NewDocumentLayout from "../routes/NewDocumentLayout";
import EditingProfileLayout from "../routes/EditingProfileLayout";
import ProcuratoryLayout from "../routes/ProcuratoryLayout";
import { useSelector } from "react-redux";

const authRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/contracts",
        element: <ContractsLayout />,
      },
      {
        path: "/contracts-details",
        element: <ContractsMobileLayout />,
      },
      {
        // path: "/profile",
        element: <ProfileLayout />,
        index: true,
      },
      {
        path: "/applications-details",
        element: <ApplicationDetailsLayout />,
      },
      {
        path: "/new-document-request",
        element: <NewDocumentLayout />,
      },
      {
        path: "/edit-profile",
        element: <EditingProfileLayout />,
      },
      {
        path: "/new-document-confirm",
        element: <ProcuratoryLayout />,
      },
      {
        path: "/applications",
        element: <p>applications</p>,
      },
      {
        path: "*",
        element: <Navigate replace to="/" />,
      },
    ],
  },
];

const AuthRouter = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) return null;

  const router = createBrowserRouter(authRoutes);

  return <RouterProvider router={router} />;
};

export default AuthRouter;
