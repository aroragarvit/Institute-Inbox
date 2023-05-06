const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo"> CollegeChat</span>
      <div className="user">
        <img src="https://picsum.photos/200" alt="user" />
        <span>Username</span>
        <button>Logout</button>
      </div>
    </div>
  );
};
export default Navbar;
