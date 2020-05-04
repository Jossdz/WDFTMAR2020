import React from "react";
import User from "./User";

class Card extends React.Component {
  state = {
    age: 25,
  };

  // Estio nos da problemas de scope
  // min () {
  //   this.setState({
  //     age: this.state.age - 1,
  //   });
  // }

  plus = () => {
    // Vamos a actualizar el estado utilizando el metodo setState del componente
    this.setState({
      age: this.state.age + 1,
    });
  };

  min = () => {
    this.setState({
      age: this.state.age - 1,
    });
  };

  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={this.props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">
            <User name={this.props.title} />
            <p>Tiene {this.state.age}</p>
            <button onClick={this.min}>-</button>
            <button onClick={this.plus}>+</button>
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
