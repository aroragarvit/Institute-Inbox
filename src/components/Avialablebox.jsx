import React from "react";

const Availablebox = (props) => {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "729px",
        height: "161px",
        border: "1px solid #E7E7E7",
        borderRadius: "4px",
        backgroundColor: "#FEFEFE",
        flexDirection: "column",
        padding: "0px",
        margin: "0px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          height: "35px",
          alignItems: "center",
          width: "auto",
          marginLeft: "12px",
          marginTop: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "40px",
            height: "35px",
            borderRadius: "30px",
            backgroundImage: `url("https://pbs.twimg.com/media/FuurB47XsAMQobh?format=jpg&name=small")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            width: "auto",
            height: "14px",
            fontFamily: "montserrat",
            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "14px",
            fontStyle: "normal",
            color: "#2E2C34",
            alignItems: "center",
            paddingLeft: "12px",
          }}
        >
          Hello my world
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "auto",
          height: "14px",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "0px",
          marginBottom: "7px",
          marginLeft: "12px",
          marginRight: "12px",
          fontFamily: "montserrat",
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "14px",
          fontStyle: "normal",
          color: "##2E2C34",
        }}
      >
        ZAKIR -C
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "auto",
          height: "60px", // Set a fixed height of 60px for the container
          marginBottom: "12px",
          marginLeft: "12px",
          marginRight: "12px",
          fontFamily: "montserrat",
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "20px",
          fontStyle: "normal",
          color: "##2E2C34",
          overflow: "hidden", // Hide the text that overflows
        }}
      >
        <div
          style={{
            overflowY: "scroll",
            height: "100%",
          }}
        >
          {/* Enclose the text within another div */}
          Hello my name is Garvit Arora and I am a student of VIT Bhopal
          University currently I am in 2nd year of my college and I am pursuing
          Btech in Computer Science and Engineering. I want to become a full
          stack developer and I am currently learning ReactJS and NodeJS.
        </div>
      </div>
      <style>
        {`
          ::-webkit-scrollbar {
            width: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: #F5F5F5;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #ccc;
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #aaa;
          }
        `}
      </style>
      <hr
        style={{
          marginTop: "0px",
          width: "699px",
          marginLeft: "12px",
          marginRight: "12px",
          color: "#E7E7E7",
        }}
      ></hr>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "auto",
          color: "#2E2C34",

          marginLeft: "12px",
          marginRight: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "montserrat",
            fontSize: "13px",
            fontWeight: "600",
            lineHeight: "14px",
            fontStyle: "normal",
            color: "#84818A",
            lineHeight: "14px",
          }}
        >
          Date Posted at
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "montserrat",
            fontSize: "15px",
            fontWeight: "600",
            lineHeight: "14px",
            fontStyle: "normal",
            color: "#7F56D8",
            textDecorationLine: "underline",
            lineHeight: "14px",
            paddingRight: "60px",
          }}
        >
          Chat
        </div>
      </div>
    </div>
  );
};

export default Availablebox;
