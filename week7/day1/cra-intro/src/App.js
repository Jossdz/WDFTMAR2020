import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

class ComponentClass extends React.Component {
  render() {
    return (
      <div>
        <b>Hola desde el componente de clase</b>
        <br />
      </div>
    );
  }
}

const App = () => (
  <div className="App App-header">
    <Navbar theme="dark" title="Ironhack Mex" />
    <h1>Componente funcional</h1>
    <p>Hola desde un componente funcional</p>
    <Card
      title="Donovan"
      description="Crossfitero"
      img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/crossfit-1572950776.png?crop=1.00xw:0.376xh;0,0.351xh&resize=480:*"
    />
    <Card
      title="vidal"
      description="Pelon de brazers"
      img="https://www.ayojon.mx/galeria/2018/09/49064_m.jpg"
    />
    <Card
      title="Dieguinho"
      description="pinchi fanboy de chakra"
      img="https://pbs.twimg.com/profile_images/1169353373012897802/skPUWd6e_400x400.jpg"
    />
  </div>
);

export default App;
