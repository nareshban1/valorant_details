import React, { useEffect, useState } from "react";
import {
  AbilitiesContainer,
  AbilitiesHeading,
  AbilitiesIconsContainer,
  AbilitiesImage,
  AbilityDescription,
  AbilityDetails,
  AbilityName,
  AgentAbilitiesContainer,
  BustImage,
  BustImageContainer,
} from "./AgentAbilities.css";

const AgentAbilities = ({ abilities, bustImage }) => {
  const [selected, setSelected] = useState(abilities?.[0]);
  const handleSelect = (ability) => {
    setSelected(ability);
  };

  useEffect(() => {
    setSelected(abilities?.[0]);
  }, [abilities]);

  return (
    <AgentAbilitiesContainer>
      <AbilitiesContainer>
        <AbilitiesHeading>Special Abilities</AbilitiesHeading>
        <AbilitiesIconsContainer>
          {abilities.map((ability, index) => (
            <AbilitiesImage
              src={ability.displayIcon}
              onClick={() => handleSelect(ability)}
              selected={selected.displayName === ability.displayName}
              key={index}
            />
          ))}
        </AbilitiesIconsContainer>
        <AbilityDetails>
          <AbilityName>{selected.displayName}</AbilityName>
          <AbilityDescription>{selected.description}</AbilityDescription>
        </AbilityDetails>
      </AbilitiesContainer>
      <BustImageContainer>
        <BustImage src={bustImage} />
      </BustImageContainer>
    </AgentAbilitiesContainer>
  );
};

export default AgentAbilities;
