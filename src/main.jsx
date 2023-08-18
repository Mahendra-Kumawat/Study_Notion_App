import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter  } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AppContextProvider } from "./context/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <BrowserRouter>
      <Toaster />
      <App />
    </BrowserRouter>
  </AppContextProvider>
);
