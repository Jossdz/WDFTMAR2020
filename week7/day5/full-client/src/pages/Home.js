import React, { Component } from "react";
import { getAllProjects } from "../services/projects";
import ProjectCard from "../components/ProjectCard";

export default class Home extends Component {
  state = {
    projects: [],
  };
  componentDidMount = async () => {
    const {
      data: { projects },
    } = await getAllProjects();
    this.setState({
      projects,
    });
  };
  render() {
    return (
      <div>
        <h1>Projects</h1>
        {this.state.projects.map((project) => (
          <ProjectCard key={project._id} {...project} />
        ))}
      </div>
    );
  }
}
