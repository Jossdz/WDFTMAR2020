import React from "react";
import { MyContext } from "../context";

export default function Secret() {
  return (
    <MyContext.Consumer>
      {({ user }) => (
        <>
          <h1>Bienvenido {user.username}</h1>
        </>
      )}
    </MyContext.Consumer>
  );
}
