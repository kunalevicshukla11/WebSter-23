import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ColorModeScript, ChakraProvider, theme } from "@chakra-ui/react";

import ColorModeSwitcher from "./ColorModeSwitcher";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraProvider>
  </Router>
);
