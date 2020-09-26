// Write your Character component here
import React, { useEffect, useState } from "react";

// Import components
import PokemonInfo from "./PokemonInfo";

// Import Dependencies
import axios from "axios";
import styled from "styled-components";

// Styled components
const PokemonListItem = styled.div`
  list-style-type: none;
`;

const PokemonName = styled.h3`
  padding: 20px 0;
  font-size: 16pt;
  font-weight: bold;
  text-transform: uppercase;
`;

export default function Pokemon(props) {
  const [pokemonInfo, setPokemonInfo] = useState([]);

  useEffect(() => {
    const pokeAPIUrl = props.infoURL;
    const pokeAPICall = axios.get(pokeAPIUrl);

    pokeAPICall.then((res) => {
      setPokemonInfo(res.data);
    });
  }, []);

  return (
    <PokemonListItem>
      <PokemonName>{props.name}</PokemonName>

      <PokemonInfo info={pokemonInfo} />
    </PokemonListItem>
  );
}
