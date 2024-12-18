import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/AuthContext.tsx";
import { CssBaseline } from "@mui/material";

import App from "./App.tsx";
import "./index.css";

import { ThemeContextProvider } from "./theme/ThemeContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeContextProvider>
    <CssBaseline>
      <AuthProvider>
        <App />
      </AuthProvider>
    </CssBaseline>
  </ThemeContextProvider>
);
