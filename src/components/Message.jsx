const Message = ({isOwner = false, message=""}) => {
  return (
    <div className={`message ${isOwner && "owner"}`}>
      <div className="messageInfo">
        <img src="https://picsum.photos/200" alt="" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>{message}</p>
        <img src="https://picsum.photos/200" alt="" />
      </div>
    </div>
  );
};
export default Message;
