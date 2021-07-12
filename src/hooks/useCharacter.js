import {useState,useEffect} from 'react'

function useCharacter(url) {
    
    const [character,setCharacter]=useState([])
    
    useEffect(()=>{

        fetch(url)
        .then(responce=>responce.json())
            .then(data=>setCharacter(data.results))

       //when there is not nothing to listen, it will render once
    },[url])



    
    return character
}

export default useCharacter
