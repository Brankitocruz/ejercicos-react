import React, { Component } from 'react';
import imagenes from '../assets';
import './styles.css';

function galeria(props) {
    console.log(props);

return  (
    <div className="galeria-img">
        {
            props.images.map((imageURL) => {
                <img class= "galeria-img" src={imageURL} alt="" />
            })
        }
        

    </div>
)
}


export default galeria;