import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DataProvider } from "./components/Task1/Context";
import { DataProviderFunc } from "./components/Task2/ContextFunc";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProviderFunc>
      <DataProvider>
        <App />
      </DataProvider>
    </DataProviderFunc>
  </React.StrictMode>
);
