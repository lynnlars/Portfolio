import React, {useContext} from "react";
import {Context} from "./ContextProvider"
import { useParams } from "react-router-dom";



export default function MyPoke(){
    const {poke} = useContext(Context)
    const { cardId } = useParams();
   
    const foundPoke = poke.find((card) => card.id == cardId) //id passed through onClick function, gives the id of the card that was clicked on

    console.log(foundPoke)
    
    return(
        <div className="found">
            <h1 className="foundhead">Here's that Pokémon!</h1>
            <img src={foundPoke.images.small} className="foundpic"/>
            <div className="found--info">
                <h1>Name: {foundPoke.name}</h1>
                <h1>Type: {foundPoke.types}</h1>
                <h1>HP: {foundPoke.hp}</h1>
            </div>
           
        </div>
    )
}