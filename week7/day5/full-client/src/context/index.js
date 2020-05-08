import React, { createContext, Component } from "react";
import { logout, currentUser } from "../services/auth";
export const MyContext = createContext();

export class ContextProvider extends Component {
  state = {
    user: {
      username: "",
      id: "",
    },
  };
  // En el monmento en que la app se monta por primera vez, nosotros preguntamos si hay una sesion en el server, si es asi el user tendra data, si no llega vacio
  componentDidMount = async () => {
    const {
      data: { user },
    } = await currentUser();
    if (user) {
      this.setUser({ user });
    }
  };
  // guardar al user
  setUser = (user) => {
    this.setState(user);
  };
  //quitar al user
  removeUser = async () => {
    await logout();
    this.setState({
      user: {
        username: "",
        id: "",
      },
    });
  };

  render() {
    const { setUser, removeUser } = this;
    return (
      <MyContext.Provider value={{ ...this.state, setUser, removeUser }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
