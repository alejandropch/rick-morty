import React ,{ useState,useReducer,useMemo,useRef, useCallback} from 'react'

import useCharacter from '../hooks/useCharacter'
import ButtonChange from './ChangeModeButton'

import '../styles/characters.css'
import Search from './Search'

export default function Characters() {
    


    const reducerCreated=(state,action) => {

        switch(action.type) {
        
            case 'FAVORITE_CHARACTER':

                return {
                    ...state,
                        // the first value is going to add all the 
                        // characters that you already have, and the second 
                        // one will add a new one
                        allFavorites: [...state.allFavorites, action.payLoad]
                }
            
                default: 
                    return state
        }
    }

    const initialState ={

        allFavorites: []
    }
   
   
    const [search, setSearch]=useState('')
    const [favorite,dispatch]=useReducer(reducerCreated,initialState)
    const searchInput=useRef(null)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    let prevCharacter=''

    function handleClick(favoriteCharacter){
      
    

        //si el personaje que viene no es igual al primero, entonces debe tocar dos veces
        if(isMobile && prevCharacter!==favoriteCharacter){
            
            prevCharacter=favoriteCharacter
            return

        }

        //payload is the character that the user clicked
        if(favorite.allFavorites.includes(favoriteCharacter)===false){
        
            dispatch({type:'FAVORITE_CHARACTER',payLoad:favoriteCharacter})
        }
        
    }


  

    const handleSearch=useCallback(()=>{

        setSearch(searchInput.current.value)

        // in this case we dont need no listen an element   
    },[])


    const API=`https://rickandmortyapi.com/api/character/`
    const characters=useCharacter(API)
            
    

    const characterFilter=useMemo(()=>
      
      characters.filter((character)=>{

            return character.name.toLowerCase().includes(search.toLowerCase())
            
        })
    ,[characters,search])


   
    return ( 
   <React.Fragment>
          
    <div className="container">
        <ButtonChange />
        <Search handleSearch={handleSearch} searchInput={searchInput} search={search}/>


        <div className="container__favorite">
                
            {(favorite.allFavorites.length ===0)? <i> Select your favorite character </i>:  <i className="heart" ></i>}

            
            {favorite.allFavorites.map(favoriteCharacter=><img key={favoriteCharacter.id} className="container__favorite--characters" src={favoriteCharacter.image} />)}

        </div>
        <div className="container__cards">
        
        {characterFilter.map(character=>(
           <div onClick={()=>handleClick(character)}className="container__card" key={character.id}>
        
                <h2 className="container__card--name">{character.name}</h2>
                <div className="container__card--subInfo">


                    <div className="subInfo__wall">
                    
                        <li>Gender:{character.gender}</li>
                        <li>Status: {character.status}</li>
                        <li>Specie: {character.species}</li>
                
                    </div>
                    <div className="subInfo__img--container">
                    <img className="subInfo__img"src={ character.image} alt={character.name+" photo"} /> 
                    </div>
                </div>
            </div>
            ))
         }

        </div> 

    </div>
    </React.Fragment>
    )
}
