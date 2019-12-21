import React from 'react';
import '../assets/styles/components/Histo.scss';
import imcaf from '../assets/static/image/caf.jpg';
import imhotel from '../assets/static/image/hotel.jpg';
import imaero from '../assets/static/image/aero.jpg';
import imbella from '../assets/static/image/bella.jpg';


const Histo = ({children}) => (

    <div className="histo">
        {children}
        <main>
    
        
        <div class="content1">
        <div class="img-content1">
            <img src={imcaf} alt=""/>
        </div>
        <div class="text-content1">
            <h1>Cafeteria chalco</h1>
            <p>Ultima visita  18 de Diciembre del 2019</p>
        </div>
        </div>


        <div class="content2">
            <div class=" img-content2">
                <img src={imhotel} alt=""/>
            </div>
            <div class="text-content2">
                <h1>Hotel Fiesta </h1>
                <p>Ultima visita  20 de Agosto del 2019</p>
            </div>
        </div>


        <div class="content3">
                <div class=" img-content3">
                    <img src={imaero} alt=""/>
                </div>
                <div class="text-content3">
                    <h1>Aeropuerto CDMX</h1>
                    <p>Ultima visita  13 de Octubre del 2019</p>
                </div>
            </div>


<div class="content4">
        <div class=" img-content4">
            <img src={imbella} alt=""/>
        </div>
        <div class="text-content4">
            <h1>Bellas Artes</h1>
            <p>Ultima visita  13 de Septiembre del 2019</p>
        </div>
    </div>
   
    </main>

    <div>
        <button  >Siguiente</button>
    </div>
    </div>

);

export default Histo;