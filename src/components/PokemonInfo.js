import React from "react";

// Import dependencies
import styled from "styled-components";

// Styled components
const InfoWrapper = styled.div`
  text-align: left;
  margin: 0 auto 15px;
  color: white;
  width: 50%;
`;

const InfoTitle = styled.h3`
  font-size: 16pt;
  text-transform: capitalize;
  margin: 0 0 5px;
  font-family: "VT323", monospace;
`;

const InfoText = styled.div`
  margin-left: 5px;
`;

const StatInfoText = styled.div`
  margin-left: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PokemonStats = styled.div`
  padding-top: 10px;
  margin-top: 10px;
  border-top: 1px dashed white;
  color: white;
  text-align: left;
`;

export default function PokemonInfo(props) {
  console.log(props.info);

  return (
    <div className="pokemon-info-wrapper">
      <div className="pokemon-info">
        <InfoWrapper>
          <InfoTitle>Abilities</InfoTitle>

          <InfoText>
            {props.info.abilities.map((ability, index) => {
              const abilityName = ability.ability.name;
              const abilityNameClean = abilityName.replace("-", " ");

              return <p key={index}>{abilityNameClean}</p>;
            })}
          </InfoText>
        </InfoWrapper>

        <InfoWrapper>
          <InfoTitle>Base Experience</InfoTitle>

          <InfoText>{props.info.base_experience}</InfoText>
        </InfoWrapper>

        <InfoWrapper>
          <InfoTitle>Height</InfoTitle>

          <InfoText>{props.info.height / 10} m</InfoText>
        </InfoWrapper>

        <InfoWrapper>
          <InfoTitle>Weight</InfoTitle>

          <InfoText>{props.info.weight / 10} kg</InfoText>
        </InfoWrapper>
      </div>

      <PokemonStats>
        <InfoTitle>Stats</InfoTitle>

        <StatInfoText>
          {props.info.stats.map((stat, index) => {
            return (
              <p className="stat-value" key={index}>
                <strong>{stat.stat.name}:</strong> {stat.base_stat}
              </p>
            );
          })}
        </StatInfoText>
      </PokemonStats>
    </div>
  );
}
