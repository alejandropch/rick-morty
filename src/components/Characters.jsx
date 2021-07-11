import React ,{ useState, useEffect,useReducer} from 'react'

import '../styles/characters.css'


export default function Characters() {
    
    

const [character,setCharacter]=useState([])

const initialState =[]



const reducerCreated=(state,action) => {

    switch(action.type) {
    
        case 'FAVORITE_CHARACTER':

            return {
                ...state,allFavorites:
                            [...state.favorite, action.payLoad]
            }
        
            default: 
                return state
    }

}

const [favorite,dispatch]=useReducer(reducerCreated,initialState)


useEffect(()=>{

fetch('https://rickandmortyapi.com/api/character')
.then(responce=>responce.json())
    .then(data=>setCharacter(data.results))

//when there is not nothing to listen, it will render once
},[])


function handleClick(favorite){
    dispatch({type:'FAVORITE_CHARACTER',payLoad:favorite})
    console.log({favorite})
}




    return ( 
    
    <div className="container">
      
        {character.map(character=>(
            
            <div onClick={()=>handleClick(character)}className="container__tarjeta" key={character.id}>
        
                <h2 className="container__tarjeta--name">{character.name}</h2>
        
                <img className="container__tarjeta--img"src={ character.image}/> 
            </div>
             
            ))
            }

</div>
    )
}
