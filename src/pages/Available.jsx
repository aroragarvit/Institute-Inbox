import { AvailableCard } from "../components/AvailableCard";
import { Tabs } from "antd";
import { MessageOutlined, CheckOutlined } from "@ant-design/icons";
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
        <Tabs
          style={{
            backgroundColor: "white",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            marginTop: "1rem",
          }}
          defaultActiveKey="1"
          items={[
            {
              key: "1",
              label: (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <MessageOutlined
                    style={{
                      color: "#7F56D8",
                      marginRight: "0.5rem",
                    }}
                  />
                  <p>Available</p>
                </div>
              ),
              children:
                users && users.length > 0 ? (
                  users.map((user, index) => (
                    <div
                      key={index}
                      style={{
                        margin: "1rem 0",
                      }}
                    >
                      <AvailableCard
                        name={user.name}
                        avatar={user.avatar}
                        nameOfHostal={user.nameOfHostal}
                        description={user.description}
                        timeOfPost={user.timeOfPost}
                        uid={user.uid}
                      />
                    </div>
                  ))
                ) : (
                  <div style={{
                    padding: "1rem 0",
                  }}>No users available</div>
                ),
            },
            {
              key: "2",
              label: (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CheckOutlined
                    style={{
                      color: "#7F56D8",
                      marginRight: "0.5rem",
                    }}
                  />
                  <p>Resolved</p>
                </div>
              ),
              children: <div style={{
                padding: "1rem 0",
              }}>Feature Coming Soon...</div>,
            },
          ]}
        />
      </div>
    );
  }
};

export default Available;
