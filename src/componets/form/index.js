import React from "react";
import './App.css';


class Form extends React.Component{
    render() {
        return(
            <div class="texto">
            <label htmlFor="username">Nombre</label>
            <input id="username" name="username" ></input><br/>
            <label htmlFor="pass">Contraseña</label>
            <input id="pass" name="pass"></input><br/>
            </div>
        );

    }

}

export default Form;

