import React, { Component } from 'react';
import './styles.css';

import obito from '../../assets/sharingantriple.png';
import rinnegansimple from '../../assets/rinnegansimple.png';
import mangekyou from '../../assets/mangekyou.png';
import rinnegan from '../../assets/rinnegan.png';


function Logo(props) {
    console.log(props);

return  (
   <div className="contenedorlogo"> 
        <div className="horizontal divPadre">
            <div className="principal">
                <img className= "rojoAdelante" src={obito} alt="rojo3" />
                <img className= "rojoAtras" src={mangekyou} alt="" />
                <img className= "violetaAdelante" src={rinnegansimple} alt="rikudo" />
                <img className= "violetaAtras" src={rinnegan} alt="" />
            </div>
        </div>
    </div>
)

}
export default Logo;