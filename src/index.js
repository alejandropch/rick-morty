import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import ThemeContext from'./context/ThemeContext'

import App from './App';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>

  <ThemeContext.Provider value={"light-mode"} >
    <App />

    </ThemeContext.Provider>

  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
