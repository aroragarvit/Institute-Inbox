const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type Your Message ......"></input>
      <div className="send">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhpj_fbrLzqPw5gHu-A4ovKlx_WBwGQw4yf7qzAK_D&s"
          alt=""
        ></img>
        <input type="file" style={{ display: "none" }} id="file"></input>
        <label htmlFor="file">
          <img src="https://picsum.photos/200" alt=""></img>
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};
export default Input;
