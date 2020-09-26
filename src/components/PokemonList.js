import React from "react";

// Import Components
import Pokemon from "./Pokemon";

// Import dependencies
import styled from "styled-components";

const PokemonListWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.7);
  text-align: left;

  &ul {
    list-style-type: none;
  }
`;

export default function Pokemons(props) {
  return (
    <PokemonListWrapper>
      <ul>
        {props.allPokemon.map((pokemon, index) => {
          return <Pokemon key={index} name={pokemon.name} infoURL={pokemon.url} />;
        })}
      </ul>
    </PokemonListWrapper>
  );
}
