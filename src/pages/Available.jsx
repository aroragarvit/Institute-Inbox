import Navbar from "../components/Navbar";
import { AvailableTabs } from "../components/AvailableTabs";
import { Button } from "antd";

import { UpdateDesc } from "../components/UpdateDesc";
import { useState, useEffect } from "react";

const Available = () => {
  {
    useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = "scroll");
    });

    return (
      <div
        style={{
          padding: "0 8rem",
          height: "100vh",
          backgroundColor: "#a7bcff",
        }}
      >
        <Navbar />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <AvailableTabs />
          <UpdateDesc />
        </div>
      </div>
    );
  }
};

export default Available;
