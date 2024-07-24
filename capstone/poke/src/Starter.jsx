import React, { useContext, useState } from "react";
import { Context } from "./ContextProvider";

export default function Starter() {
  const { randomPoke } = useContext(Context);
  const [randomPokemonName, setRandomPokemonName] = useState(""); //state for random pokemon 

  const handleRandomPoke = () => { //calls randomPoke function 
    const randomPokemon = randomPoke();
    setRandomPokemonName(randomPokemon.images.large); //grabs the image from the API
  };

  return (
    <div>
      <button onClick={handleRandomPoke} className="randombttn">Click for a random Pokemon!</button>
      <br></br>
      {randomPokemonName && <img src={randomPokemonName} className="randompic"/> }
    </div>
    //if false, nothing renders, if true, shows card. api is slow helps not break
  );
}
