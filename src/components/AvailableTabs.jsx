import { Tabs } from "antd";
import { useState, useEffect } from "react";
import { MessageOutlined, CheckOutlined } from "@ant-design/icons";
import { AvailableCard } from "./AvailableCard";
import AvailableButton from "../utilities/AvailableButton_";
import { useFetchUsers } from "../hooks/useFetchUsers";
import { formatUnix } from "../utilities/formatUnix";

export const AvailableTabs = () => {
  const { users } = useFetchUsers();
  console.log(users);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  });

  return (
    <Tabs
      style={{
        backgroundColor: "white",
        padding: "0.5rem 1rem",
        borderRadius: "0.5rem",
        marginTop: "1rem",
        width: "70%",
      }}
      defaultActiveKey="1"
      tabBarExtraContent={{
        right: <AvailableButton />,
      }}
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
                    nameOfHostal={user.hostel}
                    description={user.description}
                    timeOfPost={formatUnix(user.timeOfUpdate)}
                    uid={user.uid}
                  />
                </div>
              ))
            ) : (
              <div
                style={{
                  padding: "1rem 0",
                }}
              >
                No users available
              </div>
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
          children: (
            <div
              style={{
                padding: "1rem 0",
              }}
            >
              Feature Coming Soon...
            </div>
          ),
        },
      ]}
    />
  );
};
