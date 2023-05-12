import Chat from "../components/Chat.jsx";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  const { id: userId } = useParams();
  console.log(userId);
  const combinedId = user.uid > userId ? user.uid + userId : userId + user.uid;
  console.log(combinedId);

  return (
    <div
      style={{
        padding: "0 8rem",
        height: "100vh",
        backgroundColor: "#a7bcff",
      }}
    >
      <Navbar />
      <div className="home">
        <div className="container">
          <Chat></Chat>
        </div>
      </div>
    </div>
  );
};

export default Home;
