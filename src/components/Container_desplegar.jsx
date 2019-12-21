import React from 'react';
import '../assets/styles/components/Desplegar.scss'
import imdes from '../assets/static/icon/arrow_down.png';

const Conatiner_desplegar = () => (
    <div className="container-desplegar">
    <h2>Desliza hacia abajo para ocultar</h2>
    <div className="icono-container-desplegar">
      <img src={imdes} alt="" onclick=""/>

    </div>
</div>
);

export default Conatiner_desplegar;