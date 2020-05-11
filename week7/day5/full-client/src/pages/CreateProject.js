import React, { Component } from "react";
import { createProject } from "../services/projects";
import { uploadPhoto } from "../services/uploadService";

export default class CreateProject extends Component {
  state = {
    name: "",
    description: "",
    imgURL: "",
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handlefileInput = async (e) => {
    const photo = e.target.files[0];
    const formdata = new FormData();
    formdata.append("photo", photo);
    const {
      data: { secure_url: imgURL },
    } = await uploadPhoto(formdata);
    this.setState({
      imgURL,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    await createProject(this.state);
    this.props.history.push("/");
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <br />
        <input
          type="text"
          placeholder="description"
          name="description"
          value={this.state.description}
          onChange={this.handleInputChange}
          id="description"
        />
        <br />
        <input
          type="file"
          name="photo"
          onChange={this.handlefileInput}
          id="photo"
        />
        <br />
        <input
          type="submit"
          value="Create project"
          disabled={this.state.imgURL === ""}
        />
      </form>
    );
  }
}
