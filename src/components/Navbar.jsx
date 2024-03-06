import React from "react";
// import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Nobaber Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/5611966/pexels-photo-5611966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <span>John</span>
        <button>{/* <FaSignOutAlt /> */} Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
