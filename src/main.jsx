import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { Toaster } from "react-hot-toast";
import GlobalContextProvider from "./context/GlobalContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <GlobalContextProvider>
      <App />
      <Toaster />
    </GlobalContextProvider>
  </ThemeProvider>
);