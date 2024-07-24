import React, {useContext, useEffect} from "react";
import {Context} from "./ContextProvider"
import {Link} from 'react-router-dom'


export default function Home(props){
    //home page 
    //button to go to mypoke,get starter, and pokeList
    return(
        <div className="home">
            <h1 className="welcome">Welcome to your pokémon app!</h1>
            <p className="homep">Below you will be able to search for pokemon by name or type! Click their cards to see more about them!</p>
           
            <Link to="/pokelist"><button className="sbutton">Search Pokémon</button></Link>
            
        </div>
    )
}