import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DataProvider, Example } from "./components/Task1/context/DataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    <DataProvider>
      <Example />
    </DataProvider>
    
  </React.StrictMode>
);
