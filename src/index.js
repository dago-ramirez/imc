import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bulma/css/bulma.css';
import Componente1 from './components/seccion1/calculadoraApp';
import Componente2 from './components/seccion2/DetalleIMCApp';
import * as serviceWorker from './serviceWorker';

let title = "Cálculo de Índice de Masa Corporal"

ReactDOM.render(
  <React.StrictMode>
    <Componente1/>
    <Componente2 nombre="Fulano" apellido="De Tal" edad={20} titulo={title}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
