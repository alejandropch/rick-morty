import React ,{ useState, useEffect,useReducer} from 'react'

import '../styles/characters.css'


export default function Characters() {
    
    const [character,setCharacter]=useState([])
    const [search, setSearch]=useState('')


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


    const handleChange=(e)=>{

        setSearch(e.target.value)
        console.log(e)

    }

    const characterFilter=character.filter((character)=>{

                    return character.name.toLowerCase().includes(search.toLowerCase())
    })



    return ( 
        <React.Fragment>
          
    <div className="container">

        <div className="container__search">
            <input type="text" onChange={handleChange} value={search}></input>

        </div>



        <div className="container__favorite">
                
            {favorite.allFavorites.map(favoriteCharacter=><img key={favoriteCharacter.id} className="container__favorite--characters" src={favoriteCharacter.image} />)
            }

        </div>
        {characterFilter.map(character=>(
            
           <div onClick={()=>handleClick(character)}className="container__tarjeta" key={character.id}>
        
                <h2 className="container__tarjeta--name">{character.name}</h2>
                <div className="container__tarjeta--subInfo">


                    <div className="subInfo__wall">
                    
                        <li>Gender:{character.gender}</li>
                        <li>Status: {character.status}</li>
                        <li>Specie: {character.species}</li>
                
                    </div>
                    <div className="subInfo__img--container">
                    <img className="subInfo__img"src={ character.image} /> 
                    </div>
                </div>

            </div>
             
            ))
            }

</div>
</React.Fragment>
    )
}
