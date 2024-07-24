import React, {useState, useEffect} from "react";
import axios from 'axios'
const Context = React.createContext()
import { useNavigate } from 'react-router-dom'

function ContextProvider(props){
    //api https://pokeapi.co/api/v2/pokemon/
    const [poke, setPoke] = useState([])
    const [searchPoke, setSearchPoke] = useState(""); // State to store the search query
    const [pokeResults, setPokeResults] = useState([])
    const navigate = useNavigate()
    //const [filterData, setFilterData] = useState([])
    //useEffect 
    //axios.get
    

   console.log(poke)
    useEffect(() => {
        getPokes()
    },[])

    function getPokes(){
        axios.get('https://api.pokemontcg.io/v2/cards')
        .then(res => setPoke(res.data.data)) //all the data 
        .catch(err => console.log(err))
    }

    function handleClick(cardId){ //when clicking on poke card it'll navigate you to another page 
        navigate(`/mypoke/${cardId}`)
    }

    function randomPoke() { //use Math.random to grab random pokemon 
        const randomIndex = Math.floor(Math.random() * poke.length);
        const randomPokemon = poke[randomIndex];
        console.log(poke[randomIndex])
        return randomPokemon; 
    }
    
    const searchItems = (searchValue) => { //handling search functionality,
        setSearchPoke(searchValue) //setting state to value
        //console.log(searchValue)
        if (searchPoke !== ''){  poke.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchPoke.toLowerCase()) //filtering through api with whats in search bar 
        })
        setPokeResults(filteredPoke)
    }
      else{ //if search comes up empty, will show all the poke
        setPokeResults(poke)
      }    
    }

    const filteredPoke = poke.filter((item) => { //where the filtered data goes, there's state for it to be held in (pokeResults)
        return Object.values(item).join('').toLowerCase().includes(searchPoke.toLowerCase())
    })
    
    return(
        <Context.Provider value={{poke, setPoke, getPokes,  randomPoke, searchItems, pokeResults, searchPoke, handleClick}}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}