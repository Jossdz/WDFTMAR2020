import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ContextProvider } from "./context";
import AppRouter from "./router";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <AppRouter />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
