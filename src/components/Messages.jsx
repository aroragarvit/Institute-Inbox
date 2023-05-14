import Message from "./Message.jsx";
import { useState, useEffect } from "react";
import { onSnapshot, collection, doc } from "firebase/firestore";
import { firestore } from "../config/firebase.jsx";

const Messages = (props) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(
      doc(firestore, "chats", props.combinedID),
      (document) => {
        document.exists() && setMessages(document.data().messages);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  console.log("message");

  console.log(messages);

  return (
    <div className="messages">
      {messages.map(({ id, senderId, text, date }) => (
        <Message
          message={text}
          key={id}
          date={date}
          senderId={senderId}
        ></Message>
      ))}
    </div>
  );
};
export default Messages;
