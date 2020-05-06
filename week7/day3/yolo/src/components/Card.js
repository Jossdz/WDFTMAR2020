import React from "react";
import { Link } from "react-router-dom";
function Card({ id, name, year, technologies, description, full }) {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{technologies}</h4>
      {!full && <Link to={`/project/${id}`}>View more</Link>}
      {full && (
        <div>
          <b>{year}</b>
          <p>{description}</p>
        </div>
      )}
      <hr />
    </div>
  );
}

export default Card;
