import React, { createContext, Component } from "react";

export const MyContext = createContext();

export class ContextProvider extends Component {
  state = {
    name: "joss",
    age: 24,
    hobbies: ["play guitar"],
  };
  changeName = (name) => {
    this.setState({
      name,
    });
  };
  render() {
    const { changeName } = this;
    return (
      <MyContext.Provider value={{ ...this.state, changeName }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
