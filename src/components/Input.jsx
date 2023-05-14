import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  updateDoc,
  doc,
  arrayUnion,
  serverTimestamp,
} from "firebase/firestore";
import { firestore } from "../config/firebase.jsx";
import { v4 as uuid } from "uuid";

import Password from "antd/es/input/Password";

const Input = (props) => {
  const { user } = useContext(AuthContext);
  const { id: userId } = useParams();
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const handleSend = async () => {
    if (img) {
      // handle image upload
    } else {
      console.log("button pressed");
      await updateDoc(doc(firestore, "chats", props.combinedID), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: user.uid,
          date: Date.now(),
        }),
      });
    }
  };
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type Your Message ......"
        onChange={(e) => setText(e.target.value)}
      ></input>
      <div className="send">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhpj_fbrLzqPw5gHu-A4ovKlx_WBwGQw4yf7qzAK_D&s"
          alt=""
        ></img>
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        ></input>
        <label htmlFor="file">
          <img src="https://picsum.photos/200" alt=""></img>
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};
export default Input;
