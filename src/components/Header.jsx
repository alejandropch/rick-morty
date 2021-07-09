import React,{useState, useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

import '../styles/header.css'

export default function Header() {

    const [darkMode,setDarkMode]= useState(false)
    
    // am be able to entablish a conection between the app State with useContext
    const {updateMode,setUpdateMode}=useContext(ThemeContext)



    const handleClick=()=>{

        setDarkMode(!darkMode)
        updateMode==='dark-mode'?setUpdateMode('light-mode'):setUpdateMode('dark-mode')
      }

const color=useContext(ThemeContext)    



    return (
        <div className=" Header">
            
            <h1 className="Header__title" style={{color}}>React Hooks baby</h1>
            <button className={updateMode+" Header__button"} type="button" onClick={handleClick}>{darkMode? "Boring Light Mode":"Dark Mode Baby"}</button>
            
        </div>
    )
}
