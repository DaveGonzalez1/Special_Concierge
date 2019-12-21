import React from 'react';
import imcom from '../assets/static/icon/compartir.png';
import imcome from '../assets/static/icon/comen.png';
import imcora from '../assets/static/icon/corazon.png';
import '../assets/styles/components/Content1_coment.scss';
import face1 from '../assets/static/image/face1.jpg'

const Content1_coment = () => (
    <div class="container-testimonial">
    <div className="testimonial">
    <div >
        <img className="photo-perfil2" src={face1} alt=""/>
    </div>
    <h2>Maria Cupelo</h2>
    <h4>13 de Septiembre</h4>
    <p>Todos deben conocer Bellas artes. Es magnífico tanto por fuera como por dentro. La arquitectura es increíblemente hermosa. 
        Por dentro tiene muchas actividades por hacer.</p>
        
        <div className="container-iconos">
                <div className="content-compartir">
           <img src={imcom} alt=""/>
        </div>
        <div className="content-comentar">
           <img src={imcome} alt=""/>
        </div>
    
            <div className="content-corazon">
           <img src={imcora} alt=""/>
        </div>
</div>
</div>

</div>

);

export default Content1_coment;