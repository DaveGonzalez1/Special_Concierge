import React from 'react';
import '../assets/styles/components/Header_menu.scss'

const Header_menu = () => (
    <main className="barra-buscar">
    <div className="inputWithIcon">
            <input type="text" placeholder="¿Qué deseas buscar?"/>
            <i className="fas fa-align-right"  aria-hidden="true"></i>
            <i  id="micro"  className="fas fa-microphone"></i>
          </div>

        </main>

);

export default Header_menu;