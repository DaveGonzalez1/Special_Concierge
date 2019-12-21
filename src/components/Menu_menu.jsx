import React from 'react';
import '../assets/styles/components/Menu_menu.scss'
import im1 from '../assets/static/icon/icon1.png';
import im2 from '../assets/static/icon/icon2.png';
import im3 from '../assets/static/icon/icon3.png';
import im4 from '../assets/static/icon/icon4.png';
import im5 from '../assets/static/icon/icon5.png';
import im6 from '../assets/static/icon/icon6.png';
import im7 from '../assets/static/icon/icon7.png';
import im8 from '../assets/static/icon/icon8.png';
import im9 from '../assets/static/icon/icon9.png';5

const Menu_menu = () => (
    <div className="container-menu">  
    <div className="menu">
        <div className="photo-icono1">
        <img src={im1} className="photo-icono1"/>
        </div>
        <h2>Restaurant</h2>
    </div>
        <div className="menu">
                <div className="photo-icono2">
                <img src={im2} className="photo-icono2"/>
                </div>
              
                <h2>Plazas</h2>
            </div>

            <div className="menu">
                    <div className="photo-icono3">
                    <img src={im3} className="photo-icono3"/>
                    </div>
                    <h2>Hoteles</h2>
                </div>
                <div className="menu">
                        <div className="photo-icono4">
                        <img src={im4} className="photo-icono4"/>
                        </div>
                        <h2>Bancos</h2>
                    </div>
                    <div className="menu">
                            <div className="photo-icono5">
                            <img src={im5} className="photo-icono5"/>
                            </div>
                            <h2>Cafeterias</h2>
                        </div>
                        <div className="menu">
                                <div className="photo-icono6">
                                <img src={im6} className="photo-icono6"/>
                                </div>
                                <h2>Hospitales</h2>
                            </div>
                            <div className="menu">
                                    <div className="photo-icono7">
                                    <img src={im7} className="photo-icono7"/>
                                    </div>
                                    <h2>Cerca</h2>
                                </div>
                                <div className="menu">
                                        <div className="photo-icono8">
                                        <img src={im8} className="photo-icono8"/>
                                        </div>
                                        <h2>Tendencia</h2>
                                    </div>
                                    <div className="menu">
                                            <div className="photo-icono9">
                                            <img src={im9} className="photo-icono9"/>
                                            </div>
                                            <h2>Destacados</h2>
                                        </div>
</div>

);

export default Menu_menu;