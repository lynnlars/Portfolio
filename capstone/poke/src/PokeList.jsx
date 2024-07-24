import React, { useContext, useState } from "react";
import { Context } from "./ContextProvider";



export default function PokeList() {
    const { poke,  searchItems, pokeResults,searchPoke, handleClick } = useContext(Context);
   
    
//console.log(filteredPoke)
    return(
        <div>
            <input
            className="searchbar"
            placeholder="Search Pokémon"
            onChange={(e) => searchItems(e.target.value)}
            />

            <div className="pokecards">
               {searchPoke.length > 1 ? ( //if search length is greater than 1, show filtered 
                pokeResults.map((card) => {
                    return( //onClicks will take user to myPoke through useNavigate. anonymous function so it doesn't automatically render and waits for user to click 
                        <div onClick={() => handleClick(card.id)}> 
                        <img src={card.images.small}/>
                        </div>
                    )
                })
               ) : (
                poke.map((card) => { //if nothing typed return all
                    return(
                        <div onClick={() => handleClick(card.id)}>
                        <img src={card.images.small}/>
                        </div>
                    )
                })
               )}
            </div>

        </div>
    )

}

