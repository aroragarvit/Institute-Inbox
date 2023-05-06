import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import { Spin } from "antd";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const redirect = useNavigate();

  if (!user) {
    console.log("redirecting to login");
    redirect("/");
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
