import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Gallito from "./Gallitodeoro";

class App extends React.Component {
  state = {
    bool: true,
  };
  render() {
    return (
      <div className="App">
        <button
          onClick={() =>
            this.setState({
              bool: !this.state.bool,
            })
          }
        >
          toogle component
        </button>
        <br />
        {this.state.bool && <Gallito />}
      </div>
    );
  }
}

export default App;
