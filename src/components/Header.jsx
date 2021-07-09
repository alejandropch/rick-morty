import React,{useState, useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
export default function Header() {

const [darkMode,setDarkMode]= useState(false)


const color=useContext(ThemeContext)


const handleClick=()=>{

    setDarkMode(!darkMode)

}



    return (
        <div className="Header">
            <h1 style={{color}}>React Hooks baby</h1>
            <button type="button" onClick={handleClick}>{darkMode? "Dark Mode Honey":"Light Mode Baby"}</button>
            
        </div>
    )
}
