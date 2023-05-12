import { Avatar, Card, Space } from "antd";
import { UserOutlined, MessageOutlined } from "@ant-design/icons";
import { firestore } from "../config/firebase.jsx";
import { getDocs, setDoc, doc } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// user type: {
//     uid: string,
//     avatar: string,
//     name: string,
//     nameOfHostal: string,
//     description: string,
//     timeOfPost: string,
// }

export const AvailableCard = ({
  name,
  nameOfHostal,
  description,
  timeOfPost,
  avatar,
  uid,
}) => {
  const { user } = useContext(AuthContext);
  return (
    <Card
      size={"small"}
      title={
        <Space
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0.75rem 0",
          }}
        >
          <Avatar size={32} icon={<UserOutlined />} src={avatar} />
          <p
            style={{
              margin: "0 0 0 0.1rem",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            {name}
          </p>
        </Space>
      }
      extra={
        <MessageOutlined
          onClick={async () => {
            const combinedId = user.uid > uid ? user.uid + uid : uid + user.uid;
            try {
              const res = await getDocs(firestore, "chats", combinedId);
              if (!res.exists) {
                await setDoc(doc, (firestore, "chats", combinedId), {
                  messages: [],
                });
              }
            } catch (err) {}
          }}
          style={{
            fontSize: "20px",
            color: "#7F56D8",
          }}
        />
      }
    >
      <p
        style={{
          fontSize: "12px",
          color: "#8D8D8D",
          marginBottom: "0.5rem",
        }}
      >
        {nameOfHostal}
      </p>
      <p>{description ? description : "No Description Provided"}</p>
      <div
        style={{
          marginTop: "0.5rem",
          paddingTop: "0.5rem",
          borderTop: "1px solid #E7E7E7",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            color: "#8D8D8D",
          }}
        >
          {timeOfPost}
        </p>
      </div>
    </Card>
  );
};
