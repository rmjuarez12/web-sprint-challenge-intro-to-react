import React, { useState } from "react";

// Import Components
import PokemonListItem from "./PokemonListItem";

// Import dependencies
import styled from "styled-components";

const PokemonListWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.7);
  padding: 50px;
  opacity: 0;
`;

const PokemonListTitle = styled.h3`
  font-size: 25pt;
  text-transform: capitalize;
  margin: 0 0 25px;
`;

const PokemonListUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function Pokemons(props) {
  const [pokemonSearch, setPokemonSearch] = useState("");

  console.log(props.pokemonQuery);

  return (
    <PokemonListWrapper id="list-container">
      <PokemonListTitle>Original 151 Pokemon List</PokemonListTitle>

      <form
        className="pokemon-search"
        onSubmit={(e) => {
          e.preventDefault();

          props.pokemonSearch(pokemonSearch);
        }}
      >
        <input
          type="text"
          placeholder="Search Pokemon..."
          onChange={(text) => setPokemonSearch(text.target.value)}
        />
      </form>

      <PokemonListUl>
        {props.pokemonQuery.length < 1 &&
          props.allPokemon.map((pokemon, index) => {
            return (
              <PokemonListItem
                key={index}
                name={pokemon.name}
                infoURL={pokemon.url}
                openPokeDex={props.openPokeDex}
              />
            );
          })}

        {props.pokemonQuery.length > 0 &&
          props.pokemonQuery.map((pokemon, index) => {
            return (
              <PokemonListItem
                key={index}
                name={pokemon.name}
                infoURL={pokemon.url}
                openPokeDex={props.openPokeDex}
              />
            );
          })}
      </PokemonListUl>
    </PokemonListWrapper>
  );
}
