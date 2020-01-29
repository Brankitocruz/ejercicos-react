import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
        </form>
      </div>
    );
  }
}

export default App;
