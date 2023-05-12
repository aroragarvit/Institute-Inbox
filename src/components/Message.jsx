const Message = ({isOwner = false}) => {
  return (
    <div className={`message ${isOwner && "owner"}`}>
      <div className="messageInfo">
        <img src="https://picsum.photos/200" alt="" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p> Helooooooooooooooooooooooooo</p>
        <img src="https://picsum.photos/200" alt="" />
      </div>
    </div>
  );
};
export default Message;
