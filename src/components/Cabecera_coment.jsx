import React from 'react';
import '../assets/styles/components/Cabecera_coment.scss';
import imbella from '../assets/static/image/bella.jpg';
import icflecha from '../assets/static/icon/flecha-izquierda-blanca.png';

const Cabecera_coment =() => (
<div>
<div className="content-cabecera">
        <div className="content-logo">
            <img src={imbella} alt=""/>
       
        <div className="content-logo-flecha">
                <img src={icflecha} alt=""/>
            </div>
        </div>
        <h1>Bellas Artes</h1>
        <p>Ciudad de México</p>
        <h2>Calificación</h2>
        <form>
                <p className="clasificacion">
                  <input id="radio1" type="radio" name="estrellas" value="5"/>
                  <label for="radio1">★</label>
                  <input id="radio2" type="radio" name="estrellas" value="4"/>
                  <label for="radio2">★</label>
                  <input id="radio3" type="radio" name="estrellas" value="3"/>
                  <label for="radio3">★</label>
                  <input id="radio4" type="radio" name="estrellas" value="2"/>
                  <label for="radio4">★</label>
                  <input id="radio5" type="radio" name="estrellas" value="1"/>
                  <label for="radio5">★</label>
                </p>
              </form>
</div>

</div>
);

export default Cabecera_coment;