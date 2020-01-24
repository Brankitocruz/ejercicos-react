import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Nombre(){
  return(<h1>Brankito</h1>)
}


class Edad extends React.Component{
state = {nombre: 'branko'
}

  render(){
    return(
      <h1>22</h1>)
      
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">

        <Nombre/>
        <Edad/>

        </header>
        
      </div>
    );
  }
}

export default App;
