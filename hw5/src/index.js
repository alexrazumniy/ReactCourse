import React from "react";
import ReactDOM from "react-dom/client";
import RouterApp from "./components/RouterApp";
import { BrowserRouter as Router } from "react-router-dom";
import { DataContext } from "./components/DataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <DataContext>
        <RouterApp />
      </DataContext>
    </Router>
  </React.StrictMode>
);
