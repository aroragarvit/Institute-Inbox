import Availablebox from "../components/Avialablebox";
import AvailableButton from "../utilities/AvailableButton_";
import { fetchUsers } from "../utilities/FetchAvailableUsers .jsx";
import { useState, useEffect } from "react";
const Available = () => {
  {
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
        style={{
          padding: "0 8rem",
          height: "100vh",
          backgroundColor: "#a7bcff",
        }}
      >
        <Availablebox />
        <AvailableButton />
      </div>
    );
  }
};

export default Available;
