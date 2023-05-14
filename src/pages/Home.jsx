import Chat from "../components/Chat.jsx";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { firestore } from "../config/firebase.jsx";
import { getDoc, doc, setDoc } from "firebase/firestore";

const Home = () => {
  const [combinedID, setCombinedID] = useState("");
  const { user } = useContext(AuthContext);
  const { id: userId } = useParams();
  console.log(userId);
  const reqId = user.uid > userId ? user.uid + userId : userId + user.uid;

  useEffect(() => {
    const getChat = async () => {
      try {
        const document_ref = doc(firestore, "chats", reqId);

        const res = await getDoc(document_ref);
        console.log(res);

        if (!res.exists()) {
          await setDoc(document_ref, { messages: [] });
        }

        setCombinedID(reqId); // Move setCombinedID() here
      } catch (error) {
        console.error(error);
      }
    };

    getChat();
  }, [reqId]);

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
          {combinedID && <Chat combinedID={combinedID} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
