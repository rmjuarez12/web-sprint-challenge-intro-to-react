import React, { useState, useEffect } from "react";

// Import Components
import PokemonList from "./components/PokemonList";

// Import Assets
import "./App.css";

// Import Dependencies
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [pokemon, setPokemon] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    const pokeAPIUrl = "https://pokeapi.co/api/v2/pokemon?limit=10";
    const pokeAPICall = axios.get(pokeAPIUrl);

    pokeAPICall.then((res) => {
      console.log(res);
      setPokemon(res.data.results);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Pokemon</h1>
      <PokemonList allPokemon={pokemon} />
    </div>
  );
};

export default App;
