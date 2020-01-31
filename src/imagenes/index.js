import React, { Component } from 'react';
import imagenes from '../assets';
/*import logo from './logo.svg';
import './App.css';*/

function galeria(props) {
    console.log(props);

return  (
    <div className="galeria">
        {
            props.images.map((imageURL) => {
                <img src={imageURL} alt="" />
            })
        }
        

    </div>
)
}


export default galeria;