
import React,{useState,useContext} from 'react'

import ThemeContext from './context/ThemeContext'
import Header from './components/Header'
import Characters from './components/Characters'

function App() {

const [updateMode,setUpdateMode]= useState('light-mode')

  



  return (
  <ThemeContext.Provider value={{updateMode,setUpdateMode}} >

    <div className={updateMode}>
     <Header/>
     <Characters />
    </div>
    </ThemeContext.Provider>

  );
}

export default App;
