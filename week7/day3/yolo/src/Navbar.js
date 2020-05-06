import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <ul>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/login">
        Login
      </NavLink>
      <NavLink exact to="/signup">
        Signup
      </NavLink>
      <NavLink exact to="/profile">
        Profile
      </NavLink>
      <NavLink exact to="/projects">
        Projects
      </NavLink>
    </ul>
  );
}

export default Navbar;
