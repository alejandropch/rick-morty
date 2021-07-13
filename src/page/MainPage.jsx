import React,{useState} from 'react'
import ThemeContext from '../context/ThemeContext'
import Header from '../components/Header'
import Characters from '../components/Characters'
import '../styles/index.css';

export default function MainPage() {

const [updateMode,setUpdateMode]= useState('light-mode')

    return (
    <ThemeContext.Provider value={{updateMode,setUpdateMode}} >

        <div className={updateMode + " page"}>
             <Header/>
             <Characters />
        </div>
    </ThemeContext.Provider>
    )
}
