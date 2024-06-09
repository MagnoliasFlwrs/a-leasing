import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./routes/MainLayout";
import ContractsLayout from "./routes/ContractsLayout";

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
