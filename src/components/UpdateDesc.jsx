import { useContext } from "react";
import { Button, Input, Tag } from "antd";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import { firestore } from "../config/firebase.jsx";

export const UpdateDesc = () => {
  const { user, setUser } = useContext(AuthContext);
  const { TextArea } = Input;
  const [desc, setDesc] = useState("");

  return (
    <div
      style={{
        width: "25%",
        backgroundColor: "white",
        marginTop: "1rem",
        padding: "1rem",
        borderRadius: "0.5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            Status
          </p>
          {user && user.isAvailable ? (
            <Tag color="green">Available</Tag>
          ) : (
            <Tag color="red">Not Available</Tag>
          )}
        </div>

        <p
          style={{
            fontWeight: "bold",
            fontSize: "1rem",
            marginBottom: "1rem",
          }}
        >
          Update Description
        </p>
        <TextArea
          rows={16}
          placeholder={
            user && user.description
              ? user.description
              : "Update your description"
          }
          style={{
            marginBottom: "1rem",
            resize: "none",
          }}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <Button
        type="primary"
        onClick={async () => {
          const usersRef = firestore.collection("users");
          const userDoc = usersRef.doc(user.uid);
          await userDoc.update({
            timeOfUpdate: Date.now(),
            description: desc,
          });
          setUser({
            ...user,
            description: desc, // you are updating the context
          });
        }}
      >
        Update
      </Button>
    </div>
  );
};
