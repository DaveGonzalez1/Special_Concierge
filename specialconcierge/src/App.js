import React from 'react';
import logo from './logo.svg';
import BarraLateral from './components/BarraLateral'
import Comentario from './components/Comentarios'
import Informacion from './components/Informacion'
import './App.css';
import ReactFontFace from 'react-font-face'
import Font from './components/fonts/Gibson-SemiBold.otf'
const styles = {
  main: {
    margin: 15,
    lineHeight: 1.4,
    fontFamily: 'Gibson',
  },
  google1: {
    fontFamily: 'Pangolin',
  },
  google2: {
    fontFamily: 'Roboto Mono',
  },
};
export default class App extends React.Component {
 render(){
  return (
    <div tyle={ styles.google1 } >
         {/* <Comentario/> */}
         <BarraLateral/>
         {/* <Informacion/> */}
       
    </div>
  );
 }
}
