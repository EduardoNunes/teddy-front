import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import { GlobalProvider } from "./context/globalContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </StrictMode>
);
