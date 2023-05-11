import { useContext } from "react";
import { Button, Input, Tag } from "antd";
import { AuthContext } from "../context/AuthContext";

export const UpdateDesc = () => {
  const { user } = useContext(AuthContext);
  const { TextArea } = Input;
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
        />
      </div>
      <Button type="primary" onClick={() => {
        console.log(Date.now())
      }}>Update</Button>
    </div>
  );
};
