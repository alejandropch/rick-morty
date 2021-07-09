import React,{useState, useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
export default function Header() {

    const [darkMode,setDarkMode]= useState(false)
    
    // am be able to entablish a conection between the app State with useContext
    const {updateMode,setUpdateMode}=useContext(ThemeContext)



    const handleClick=()=>{

        setDarkMode(!darkMode)
        updateMode==='light-mode'?setUpdateMode('dark-mode'):setUpdateMode('light-mode')
      }

const color=useContext(ThemeContext)    



    return (
        <div className="Header">
            <h1 style={{color}}>React Hooks baby</h1>
            <button type="button" onClick={handleClick}>{darkMode? "Dark Mode Baby":"Boring Light Mode "}</button>
            
        </div>
    )
}
