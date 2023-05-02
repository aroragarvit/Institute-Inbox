import Messages from "./Messages.jsx";
import Input from "./Input.jsx";
const chat = function () {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
export default chat;
