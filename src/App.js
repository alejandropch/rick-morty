
import React,{useState,useContext} from 'react'
import './styles/index.css';

import ThemeContext from './context/ThemeContext'
import Header from './components/Header'
import Characters from './components/Characters'

function App() {

const [updateMode,setUpdateMode]= useState('light-mode')

  



  return (
  <ThemeContext.Provider value={{updateMode,setUpdateMode}} >

    <div className={updateMode + " page"}>
     <Header/>
     <Characters />
    </div>
    </ThemeContext.Provider>

  );
}

export default App;
