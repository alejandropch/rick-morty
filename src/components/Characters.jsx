import React ,{ useState, useEffect} from 'react'

import '../styles/characters.css'


export default function Characters() {
    
    
const [character,setCharacter]=useState([])


useEffect(()=>{

fetch('https://rickandmortyapi.com/api/character')
.then(responce=>responce.json())
    .then(data=>setCharacter(data.results))

//when there is not nothing to listen, it will render once
},[])

    return ( 
    
        <div className="container">
      
            {character.map(character=>(
            
                   <div className="tarjeta">
             <h2>{character.name}</h2>
             <img src={character.image}/> 
             </div>
             
            ))
            }

</div>
    )
}
