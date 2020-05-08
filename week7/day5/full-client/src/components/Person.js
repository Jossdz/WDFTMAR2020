import React from "react";
import { MyContext } from "../context";

class Person extends React.Component {
  state = {
    name: "",
  };
  render() {
    return (
      <MyContext.Consumer>
        {(state) => {
          return (
            <>
              <h1>{state.name}</h1>
              <input
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={({ target: { name, value } }) =>
                  this.setState({ [name]: value })
                }
              />
              <button onClick={() => state.changeName(this.state.name)}>
                changename
              </button>
            </>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default Person;
