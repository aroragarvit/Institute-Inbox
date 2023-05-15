import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../config/firebase";
import { LogoutOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        borderBottom: "1px solid #E5E5E5",
        borderRadius: "0 0 0.5rem 0.5rem",
        position: "sticky",
        top: "0",
        zIndex: "100",
        backgroundColor: "#fff",
      }}
    >
      <span className="logo">Welcome! {user.email} </span>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F5F5F5",
          padding: "0.5rem 1rem",
          borderRadius: "1rem",
        }}
      >
        <Avatar
          style={{
            backgroundColor: "#7F56D8",
            marginRight: "1rem",
          }}
          size={40}
          src={user.photoURL}
        >
          {user.email[0].toUpperCase()}
        </Avatar>
        <span
          style={{
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          {user.email}
        </span>
        <LogoutOutlined
          style={{
            marginLeft: "1rem",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          onClick={() => {
            auth.signOut();
            setUser(null);
          }}
        />
      </div>
    </div>
  );
};
export default Navbar;
