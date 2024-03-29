import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "./providers";
import GlobalStyle from "./styles/GlobalStyle";
import {AnimatePresence} from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
       <AnimatePresence>
          <GlobalStyle />
          <App />
        </AnimatePresence>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
