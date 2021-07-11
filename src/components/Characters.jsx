import React ,{ useState, useEffect,useReducer} from 'react'

import '../styles/characters.css'


export default function Characters() {
    
    

const initialState ={

    allFavorites: []
}


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

 
const [character,setCharacter]=useState([])



const [favorite,dispatch]=useReducer(reducerCreated,initialState)


useEffect(()=>{

fetch('https://rickandmortyapi.com/api/character')
.then(responce=>responce.json())
    .then(data=>setCharacter(data.results))

//when there is not nothing to listen, it will render once
},[])


function handleClick(favorite){
    dispatch({type:'FAVORITE_CHARACTER',payLoad:favorite})
}




    return ( 
    
    <div className="container">
      {

        favorite.allFavorites.map(favoriteCharacter=><li>{favoriteCharacter.name}</li>)

      }
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
