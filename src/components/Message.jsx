import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import { firestore } from "../config/firebase.jsx";
import { formatUnix } from "../utilities/formatUnix";
import { useEffect, useState, useRef } from "react";

const Message = ({ message, date, senderId }) => {
  console.log(message);
  // text , date , senderId , id
  const { user } = useContext(AuthContext); // our current user
  // current user also get that
  const { id: userId } = useParams();
  const [image, setImage] = useState(null);
  const userRef = firestore.collection("users").doc(userId);
  useEffect(() => {
    const getImage = async () => {
      const userGetted = await userRef.get();
      const userData = userGetted.data();
      setImage(userData.photoURL);
    };
    getImage();
  }, []);
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div ref={ref} className={`message ${senderId === user.uid && "owner"}`}>
      <div className="messageInfo">
        <img src={senderId === user.uid ? user.photoURL : image}></img>
        <span>{formatUnix(date)}</span>
      </div>
      <div className="messageContent">
        <p>{message}</p>
        {/* <img src="https://picsum.photos/200" alt="" />*/}
      </div>
    </div>
  );
};
export default Message;
