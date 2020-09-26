import React from "react";

// Import dependencies
import styled from "styled-components";

// Styled components
const InfoWrapper = styled.div`
  text-align: left;
  width: 80%;
  margin: 0 auto 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid black;
`;

const InfoTitle = styled.h3`
  font-size: 14pt;
  text-transform: capitalize;
  margin: 0 0 15px;
`;

const InfoText = styled.div`
  margin-left: 10px;
`;

export default function PokemonInfo(props) {
  console.log(props.info);

  return (
    <div className="pokemon-info">
      <InfoWrapper>
        <InfoTitle>Abilities</InfoTitle>

        <InfoText>
          {props.info.abilities !== undefined &&
            props.info.abilities.map((ability, index) => {
              return <p key={index}>{ability.ability.name}</p>;
            })}
        </InfoText>
      </InfoWrapper>

      <InfoWrapper>
        <InfoTitle>Base Experience</InfoTitle>

        <InfoText>{props.info.base_experience}</InfoText>
      </InfoWrapper>

      <InfoWrapper>
        <InfoTitle>Weight</InfoTitle>

        <InfoText>{props.info.weight}</InfoText>
      </InfoWrapper>
    </div>
  );
}
