import React from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context";

function Navbar() {
  return (
    <MyContext.Consumer>
      {({ user: { username }, removeUser }) => (
        <>
          {username === "" ? (
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>User: {username}</li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/secret">Secret</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/projects/new">New project</Link>
              </li>
              <li>
                <button onClick={removeUser}>Logout</button>
              </li>
            </ul>
          )}
        </>
      )}
    </MyContext.Consumer>
  );
}

export default Navbar;
