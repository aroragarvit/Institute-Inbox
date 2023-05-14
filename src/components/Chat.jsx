import Messages from "./Messages.jsx";
import Input from "./Input.jsx";
const chat = function (props) {
  console.log("combinedID");
  console.log(props.combinedID);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
      </div>
      <Messages combinedID={props.combinedID} />
      <Input combinedID={props.combinedID} />
    </div>
  );
};
export default chat;
