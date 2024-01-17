import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { AuthContextProvider } from "context/AuthContext";
import { THemeContextProvider } from "context/ThemeContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <THemeContextProvider>
    <AuthContextProvider>
      <Router>
        <App />
      </Router>
    </AuthContextProvider>
  </THemeContextProvider>
);
