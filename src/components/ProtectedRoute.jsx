import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import { Spin } from "antd";

import { useEffect } from "react";
const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const redirect = useNavigate();
  useEffect(() => {
    if (!user) {
      console.log("redirecting to login");
      console.log(user);
      setTimeout(() => {
        redirect("/");
      }, 500);
    }
  }, [redirect, user]);

  if (!user) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Spin />
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
