<<<<<<< HEAD
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import * as serviceWorker from "./serviceWorker"
import Router from "./Router"

ReactDOM.render(<Router />, document.getElementById("root"))
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
>>>>>>> 52eeaa0560387a009edfd75dd2777ba81afc62d7

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
<<<<<<< HEAD
serviceWorker.unregister()
=======
serviceWorker.unregister();
>>>>>>> 52eeaa0560387a009edfd75dd2777ba81afc62d7
