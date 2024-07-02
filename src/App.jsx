import { ChakraProvider } from '@chakra-ui/react'
import './App.css';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./routes/MainLayout";
import ContractsLayout from "./routes/ContractsLayout";
import ContractsMobileLayout from "./routes/ContractsMobileLayout.jsx";
import ApplicationDetailsLayout from "./routes/ApplicationDetailsLayout.jsx";
import ProfileLayout from "./routes/ProfileLayout.jsx";
import ProcuratoryLayout from "./routes/ProcuratoryLayout.jsx";
import NewDocumentLayout from "./routes/NewDocumentLayout.jsx";

function App() {
    const routes = [
        {
            path: 'login',
            element: <p>страница авторизации</p>,
        },
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: "/contracts",
                    element: <ContractsLayout/>,
                },
                {
                    path: "/contracts-details",
                    element: <ContractsMobileLayout/>,
                },
                {
                    // path: "/profile",
                    element: <ProfileLayout/>,
                    index:true,
                },
                {
                    path: "/applications-details",
                    element: <ApplicationDetailsLayout/>,
                },
                {
                    path: "/new-document-request",
                    element: <NewDocumentLayout/>,
                },
                {
                    path: "/new-document-confirm",
                    element: <ProcuratoryLayout/>,
                },
                {
                    path: "/applications",
                    element: <p>applications</p>,
                },
            ],
        },
    ];
    const router = createBrowserRouter(routes);
    return (
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    );
}

export default App;
