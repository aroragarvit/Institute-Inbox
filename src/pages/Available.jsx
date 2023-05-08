import Navbar from "../components/Navbar";
import { AvailableTabs } from "../components/AvailableTabs";
import { Button } from "antd";
import { UpdateDesc } from "../components/UpdateDesc";

const Available = () => {
  {
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
