// Import React utilities
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import React Router
import { BrowserRouter } from "react-router";

// Import the root component
import App from "./App";

// Import global styles
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Enable routing throughout the application */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
