import { useState, useEffect } from "react";
import { fetchUsers } from "../utilities/FetchAvailableUsers.jsx";
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
    <div className="home">
      <div className=" container">
        <Sidebar></Sidebar>
        <Chat></Chat>
      </div>
    </div>
  );
};

export default Home;
