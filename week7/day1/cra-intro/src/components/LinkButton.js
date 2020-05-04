import React from "react";

const LinkButton = ({ title, link = "#" }) => (
  <a className="nav-link" href={link}>
    {title}
  </a>
);

export default LinkButton;
