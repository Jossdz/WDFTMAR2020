import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";
import { getProject } from "../services/projects";
import { MyContext } from "../context";

export default class ProjectDetail extends Component {
  state = {
    project: {},
  };

  componentDidMount = async () => {
    const {
      data: { project },
    } = await getProject(this.props.match.params.id);

    this.setState({ project });
  };

  render() {
    return (
      <MyContext.Consumer>
        {({ user: { username } }) => (
          <>
            <h1>Project:</h1>
            <ProjectCard {...this.state.project} user={username} />
          </>
        )}
      </MyContext.Consumer>
    );
  }
}
