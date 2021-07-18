import React,{useState, useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

import '../styles/changeModeButton.css'



export default function ChangeModeButton() {


    const [darkMode,setDarkMode]= useState(false)
    
    // am be able to entablish a conection between the app State with useContext
    const {updateMode,setUpdateMode}=useContext(ThemeContext)

    const handleClickStateMode=()=>{

        setDarkMode(!darkMode)
        updateMode==='dark-mode'?setUpdateMode('light-mode'):setUpdateMode('dark-mode')
      }



  
    return (
   <div className="container__button" > 

             <button className={updateMode+" Header__button"} type="button" onClick={handleClickStateMode}>{darkMode? "Dark Mode Baby":"Boring Light Mode"}</button>
        </div>

    )
}
