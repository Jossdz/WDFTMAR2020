import React, { Component } from "react";

export default class TextShow extends Component {
  state = {
    message: "",
  };

  changeInput = (event) => {
    const message = event.target.value;

    this.setState({
      message,
    });
  };

  render() {
    return (
      <div>
        {/* Esto se llama input controlado */}
        <input
          type="text"
          value={this.state.message}
          onChange={this.changeInput}
        />
        <p>{this.state.message}</p>
      </div>
    );
  }
}
