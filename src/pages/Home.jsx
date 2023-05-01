import { useState, useEffect } from "react";
import { fetchUsers } from "../utilities/FetchAvailableUsers .jsx";
import Sidebar from "../components/Sidebar.jsx";
import Chat from "../components/Chat.jsx";
const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  });

  useEffect(() => {
    const getUsers = async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
    };
    getUsers();
  }, []);

  return (
    <div
      className="Home"
      style={{
        display: "flex",
        backgroundColor: "#C7DEFA",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",

        border: "1px solid black",
        borderRadius: "3px",
        width: "100%",
        // add blurr to the background
      }}
    >
      <div
        className="Container"
        style={{
          display: "flex",
          backgroundColor: "#D8F0FA",
          height: "70%",
          width: "60%",
          border: "3px solid white",
        }}
      >
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
