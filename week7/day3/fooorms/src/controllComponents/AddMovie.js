import React, { Component } from "react";

export default class AddMovie extends Component {
  state = {
    title: "",
    director: "",
    hasOscars: false,
    IMDbRating: "",
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  cleanState = () => {
    this.setState({
      title: "",
      director: "",
      hasOscars: false,
      IMDbRating: "",
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.addMovie(this.state);
    this.cleanState();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />

          <label>Director:</label>
          <input
            type="text"
            name="director"
            value={this.state.director}
            onChange={this.handleInputChange}
          />

          <label>Oscar Awarded:</label>
          <input
            type="checkbox"
            name="hasOscars"
            checked={this.state.hasOscars}
            onChange={this.handleInputChange}
          />

          <label>IMDb Rating:</label>
          <input
            type="text"
            name="IMDbRating"
            value={this.state.IMDbRating}
            onChange={this.handleInputChange}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
