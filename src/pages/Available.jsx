import Navbar from "../components/Navbar";
import { AvailableTabs } from "../components/AvailableTabs";

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
        <AvailableTabs />

      </div>
    );
  }
};

export default Available;
