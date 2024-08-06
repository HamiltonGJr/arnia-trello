import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";

import App from "./App.tsx";
import theme from "./themes/theme.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <ToastContainer />
        <App />
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);
