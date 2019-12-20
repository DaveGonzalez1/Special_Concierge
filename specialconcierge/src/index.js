import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BarraLateral from './components/BarraLateral'
import Comentario from './components/Comentarios'
import Informacion from './components/Informacion'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Informacion />, document.getElementById('root'));
// ReactDOM.render(<Comentario />, document.getElementById('root'));
// ReactDOM.render(<BarraLateral />, document.getElementById('root'));

serviceWorker.unregister();
