import React,{useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

import '../styles/header.css'

export default function Header() {

 

const color=useContext(ThemeContext)    



    return (
        <div className=" Header" alt="Cool Image of Rick & Morty">
            
            <h1 className="Header__title" style={{color}}>The Rick & Morty API</h1>
           
            
        </div>
    )
}
