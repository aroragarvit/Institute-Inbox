import Navbar from "./Navbar";
import Chats from "./Chats";
const sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Chats />
    </div>
  );
};
export default sidebar;
