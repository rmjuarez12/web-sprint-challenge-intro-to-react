import React, { useEffect, useState } from "react";

// Import dependencies
import styled from "styled-components";
import axios from "axios";

// Styled components
const PokemonItemWrapper = styled.li`
  width: 160px;
  height: 160px;
  background: black;
  position: relative;
  margin: 0 15px 30px;
  background-color: #686de0;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.3s all;

  &:hover {
    background-color: rgba(104, 109, 224, 0.5);
  }
`;

const PokemonItemButton = styled.button`
  width: 160px;
  height: 160px;
  background-image: url(${(props) => props.bgImg});
  background-size: 70% auto;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  cursor: pointer;
`;

const PokemonItemName = styled.p`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  z-index: 20;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 3px 5px;
  text-transform: capitalize;
`;

export default function PokemonListItem(props) {
  const [pokemonInfo, setPokemonInfo] = useState([]);

  useEffect(() => {
    const pokeAPIUrl = props.infoURL;
    const pokeAPICall = axios.get(pokeAPIUrl);

    pokeAPICall.then((res) => {
      setPokemonInfo(res.data);
    });
  }, [props.infoURL]);

  return (
    <PokemonItemWrapper>
      {pokemonInfo.length !== 0 && (
        <PokemonItemButton
          bgImg={pokemonInfo.sprites.versions["generation-v"]["black-white"].front_default}
          onClick={(e) => props.openPokeDex(pokemonInfo)}
        />
      )}

      <PokemonItemName>{props.name}</PokemonItemName>
    </PokemonItemWrapper>
  );
}
