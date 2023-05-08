import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/AuthContext.jsx";
import App from "./App.js";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#7F56D8",
            colorBgTextHover: "#F3E7F9",
            colorBgTextActive: "#eac5fc",
            controlItemBgHover: "#F3E7F9",
            controlItemBgActive: "#eac5fc",
          },
        }}
      >
        <App />
      </ConfigProvider>
    </AuthProvider>
  </React.StrictMode>
);
