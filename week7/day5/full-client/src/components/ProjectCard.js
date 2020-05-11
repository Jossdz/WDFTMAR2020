import React from "react";
import { Link, withRouter } from "react-router-dom";
import { deleteProject } from "../services/projects";

function ProjectCard({
  name,
  description,
  imgURL,
  done,
  owner,
  _id,
  user,
  history,
}) {
  console.log(owner);

  const delProject = async () => {
    await deleteProject(_id);
    history.push("/");
  };
  return (
    <div>
      <h2>{name}</h2>
      <img width="300px" src={imgURL} alt={name} />
      <p>{description}</p>
      {owner && <b>By @{owner.username}</b>}
      <br />
      <Link to={`/projects/${_id}`}>View more</Link>
      {owner && user && user === owner.username && (
        <>
          <button onClick={delProject}>Delete</button>
        </>
      )}
    </div>
  );
}
// HOC
export default withRouter(ProjectCard);
