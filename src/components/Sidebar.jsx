import Navbar from "./Navbar";
const sidebar = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "35%",
        backgroundColor: "#F7E3EE",
        borderRight: "1px solid black",
      }}
    >
      <Navbar />
      Sidebar
    </div>
  );
};
export default sidebar;
