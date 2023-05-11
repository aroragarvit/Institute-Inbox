import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar.jsx";
import Chat from "../components/Chat.jsx";

const Home = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  });
  return (
    <div className="home">
      <div className=" container">
        <Sidebar></Sidebar>
        <Chat></Chat>
      </div>
    </div>
  );
};

export default Home;
