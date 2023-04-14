// ce fichier est le point d'entrée de votre application React en TypeScript. Il contient le code qui monte votre application React dans le DOM
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);