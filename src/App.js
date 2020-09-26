import React, { useState, useEffect } from "react";

// Import Components
import PokemonList from "./components/PokemonList";

// Import Assets
import "./App.css";

// Import Dependencies
import axios from "axios";
import PokeDex from "./components/PokeDex";
import { gsap } from "gsap";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    const pokeAPIUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";
    const pokeAPICall = axios.get(pokeAPIUrl);

    pokeAPICall
      .then((res) => {
        console.log(res);
        setPokemonList(res.data.results);
      })
      .then((res) => {
        gsap.to("#list-container", { opacity: 1, duration: 1 });
      })
      .catch((error) => alert(error));
  }, []);

  // Function to bring in the PokeDex with the pokemon info
  function openPokeDex(pokemon) {
    gsap.to("#overlay", { opacity: 1, display: "block", duration: 1 });
    gsap.to("#pokedex", { y: 0, display: "block", duration: 1 });

    console.log(pokemon);
    setSelectedPokemon(pokemon);
  }

  // Function to close the PokeDex
  function closePokedex() {
    gsap.to("#overlay", { opacity: 0, display: "none", duration: 1 });
    gsap.to("#pokedex", { y: "100vh", display: "block", duration: 1 });

    setSelectedPokemon(null);
  }

  // Add an event listener to close PokeDex with the escape key
  if (selectedPokemon !== null) {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" || event.key === "Esc") {
        closePokedex();
      }
    });
  }

  return (
    <div className="App">
      <PokeDex selectedPokemon={selectedPokemon} closePokedex={closePokedex} />

      <PokemonList allPokemon={pokemonList} openPokeDex={openPokeDex} />

      <div id="overlay"></div>
    </div>
  );
};

export default App;
