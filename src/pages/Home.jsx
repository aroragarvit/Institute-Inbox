import Chat from "../components/Chat.jsx";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const Home = () => {
  const { id: combinedId } = useParams();
  console.log(combinedId)

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
