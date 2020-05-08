import React, { Component } from "react";
import { login } from "../services/auth";
import { MyContext } from "../context";
export default class Login extends Component {
  isSignup = this.props.match.path === "/signup";
  state = {
    username: "",
    password: "",
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (e, setUser) => {
    e.preventDefault();

    //usamos el servicio para logear al user
    const { data: user } = await login(this.state);
    // guardamos al user en el contexto usando el metodo que pusimos disponible en el cuyo nombre es setUser y el cual recibimos como param desde el metodo onSubmit
    setUser(user);
    //Una vez hecho el login y guardado el user redirigimos a home
    this.props.history.push("/profile");
  };

  render() {
    return (
      <MyContext.Consumer>
        {({ setUser }) => (
          <>
            <h1>Login</h1>
            <form onSubmit={(e) => this.handleSubmit(e, setUser)}>
              <input
                type="text"
                name="username"
                id="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                placeholder="username"
              />
              <br />
              <input
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                placeholder="password"
              />
              <br />
              <input type="submit" value="Login" />
            </form>
          </>
        )}
      </MyContext.Consumer>
    );
  }
}
