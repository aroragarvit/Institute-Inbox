import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import { Spin } from "antd";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const redirect = useNavigate();

  useEffect(() => {
    if (!user) {
      console.log("redirecting to login");
      redirect("/register");
    }
  }, [user]);

  return (
    <>
      {user ? (
        { children }
      ) : (
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
      )}
    </>
  );
};

export default ProtectedRoute;
