import React, { Component } from "react";
import Card from "../components/Card";

export default class Projects extends Component {
  state = {
    projects: [
      {
        id: "1a",
        name: "The Frogger Clone",
        year: 2017,
        technologies: "JavaScript, jQuery",
        description: "The first project game clone.",
      },
      {
        id: "2b",
        name: "iTravel",
        year: 2017,
        technologies: "Mongo DB, ExpressJS, NodeJS, JavaScript, HTML, CSS",
        description:
          "Web App that allows logged in users to share their experiences about travel destinations.",
      },
      {
        id: "3c",
        name: "The Plan",
        year: 2017,
        technologies:
          "Mongo DB, ExpressJS, Angular2, NodeJS, JavaScript, HTML, CSS",
        description:
          "Web App that allows logged in users to plan your next activity with your friends or business partners.",
      },
    ],
  };
  render() {
    return (
      <>
        <h2>Projects:</h2>
        {this.state.projects.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </>
    );
  }
}
