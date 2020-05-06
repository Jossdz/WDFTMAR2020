import React from "react";
import Card from "../components/Card";

function Project(props) {
  const projects = [
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
  ];

  const {
    params: { id },
  } = props.match;
  return (
    <div>
      <h1>Project: {id}</h1>
      {projects
        .filter((project) => project.id === id)
        .map((project) => (
          <Card {...project} full />
        ))}
    </div>
  );
}

export default Project;
