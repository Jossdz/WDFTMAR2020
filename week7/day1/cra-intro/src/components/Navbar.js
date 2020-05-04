import React, { Component } from "react";
import LinkButton from "./LinkButton";

class Navbar extends Component {
  state = {
    theme: false,
  };

  switchTheme = () => {
    this.setState({
      theme: !this.state.theme,
    });
  };

  render() {
    return (
      <nav
        className={`navbar navbar-expand-lg navbar-${
          this.state.theme ? "light" : "dark"
        } bg-${this.state.theme ? "light" : "dark"}`}
      >
        <a className="navbar-brand" href="#">
          {this.props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <LinkButton title="Home" />
            </li>
            <li className="nav-item">
              <LinkButton title="Feature" />
            </li>
            <li className="nav-item">
              <LinkButton title="Pricin" />
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
        <button className="btn btn-primary" onClick={this.switchTheme}>
          Toggle theme
        </button>
      </nav>
    );
  }
}

export default Navbar;
