import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

import { Provider } from "react-redux";
import { store } from "./lib/store";
import AuthRouter from "./routers/auth-router.component.jsx";
import NotAuthRouter from "./routers/not-auth-router.component.jsx";

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <NotAuthRouter />
        <AuthRouter />
      </Provider>
    </ChakraProvider>
  );
}

export default App;
