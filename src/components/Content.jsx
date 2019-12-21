import React from 'react';
import '../assets/styles/components/Content.scss';
import flecha from '../assets/static/icon/flecha_izquierda.png';

const Content = () => (
    <div className="content-cabecera">
    <div className="content-logo-1">
        <img src={flecha} className="flecha"/>
    </div>
    <h1>Historial</h1>
    <p></p>
</div>
);

export default Content;