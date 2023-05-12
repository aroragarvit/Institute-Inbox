import { useState, useEffect } from "react";
import Chat from "../components/Chat.jsx";
import Navbar from "../components/Navbar";

const Home = () => {
  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  //   return () => (document.body.style.overflow = "scroll");
  // });
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
          <Chat></Chat>
        </div>
      </div>
    </div>
  );
};

export default Home;
