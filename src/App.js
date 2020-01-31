import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './imagenes/index.js';
import imagen1 from './assets/imagen1.jpg';
import imagen2 from './assets/imagen2.jpg';
import imagen3 from './assets/imagen3.jpg';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>BRANKO CRUZ 👻!!!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <form className="texto-principal">
          <label>Nombre y Apellido 😎</label>
          <input></input>
          <label>Correo 📬</label>
          <input></input>
          <label>Comentario 🖖</label>
          <input></input>
          <div className="boton">
          <button><a herf ="imagenes/index.js">Galeria</a></button>
          <img src={imagen1} className="galeria" alt="" />
          <img src={imagen2} className="galeria" alt="" />
          <img src={imagen3} className="galeria" alt="" />


          </div>
        </form>
      </div>
    );
  }
}

export default App;
