import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Index from "./pages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <React.Fragment>
      <Index />
    </React.Fragment>
  </React.StrictMode>
);
