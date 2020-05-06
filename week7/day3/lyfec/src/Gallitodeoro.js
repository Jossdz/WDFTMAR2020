import React, { Component } from "react";

export default class Gallitodeoro extends Component {
  state = {
    interval: null,
    counter: 0,
  };
  //Es el momento donde el componente nos notifica del montado con exito, aca podemos hacer multiples acciones
  componentDidMount = () => {
    console.log("ya me pinte wey");
    this.setState({
      interval: setInterval(() => {
        this.setState((prevState) => ({
          counter: prevState.counter + 1,
        }));
      }, 1000),
    });
    //suscribirse a algun servicio
    //llamadas a una api
    // pueden notificar de alguna accion al user
  };
  // Este metodo se ejecuta cuando el componente deja de estar en la vista
  componentWillUnmount = () => {
    console.log("ya me mori wey");
    clearInterval(this.state.interval);
    //dessuscribir el servicio
    // notificar al usuario de alguna cosa...
  };
  // Y este metodo se ejecuta cuando se reciben nuevos props
  componentDidUpdate() {
    // notificamos de nuevos props recibidos o en funcion de ellos
    console.log("me actualice");
  }
  // El render se ejecuta cuando... el componente se pinta por primera vez. o cuando recibe nuevos props o cuando sucede un setstate o cuando se forza.
  render() {
    return (
      <>
        <img src="https://assets.elimparcial.com/__export/1588659567733/sites/elimparcial/img/2020/05/04/valentxn_elizalde_1.jpg_1359985867.jpg" />
        <p>Contador: {this.state.counter}</p>
      </>
    );
  }
}
