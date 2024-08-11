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
import MainPageLayout from "../routes/MainPageLayout.jsx";
import ApplicationPageLayout from "../routes/ApplicationPageLayout.jsx";
import NewApplicationPage from "../routes/NewApplicationPage.jsx";
import FaqLayout from "../routes/FaqLayout.jsx";

const authRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPageLayout/>,
      },
      {
        path: "/contracts",
        element: <ContractsLayout />,
      },
      {
        path: "/contracts-details",
        element: <ContractsMobileLayout />,
      },
      {
        path: "/profile",
        element: <ProfileLayout />,
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
        element: <ApplicationPageLayout/>,
      },
      {
        path: "/new-application",
        element: <NewApplicationPage/>,
      },
      {
        path: "/faq",
        element: <FaqLayout/>,
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
