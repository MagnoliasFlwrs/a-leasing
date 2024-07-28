import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";

import { Provider } from "react-redux";
import { store } from "./lib/store";
import AuthRouter from "./routers/auth-router.component.jsx";
import NotAuthRouter from "./routers/not-auth-router.component.jsx";
import theme from "./utils/theme.js";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <NotAuthRouter />
        <AuthRouter />
      </Provider>
    </ChakraProvider>
  );
}

export default App;
