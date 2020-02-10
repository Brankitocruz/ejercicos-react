import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './imagenes/index.js';
import imagen1 from './assets/imagen1.jpg';
import imagen2 from './assets/imagen2.jpg';
import imagen3 from './assets/imagen3.jpg';
import wolox from './assets/wolox.png';
import empujar from './assets/empujar.png';

import button from './components-button/index.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>💙BIENVENIDOS 💛A MI PERFIL💙!!!</h2>
        </div>
        <p className="App-intro">
          Soy una persona que le gusta aprender cosas nuevas y ser parte de grandes desafíos, responsable y perseverante. Estoy buscando un espacio de trabajo en donde pueda desarrollar estas cualidades y los conocimientos necesarios para potenciar mis estudios.
        </p>
        <form className="texto-principal">
          <label>Nombre y Apellido 😎</label>
          <input></input>
          <label>Correo 📬</label>
          <input></input>
          <label>Comentario 🖖</label>
          <input></input>

          <div className="boton">
          <button>
            <strong>CV👻</strong>
          </button> 
          </div>

          <img src={imagen1} className="galeria-img" alt="" />
          <img src={imagen2} className="galeria-img" alt="" />
          <img src={imagen3} className="galeria-img" alt="" /> <br></br>
          <img src={wolox} className="wolox-empujar" alt="" />
          <img src={empujar} className="wolox-empujar" alt="" />

        </form>
      </div>
    );
  }
}

export default App;
