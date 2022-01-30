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

  const variants = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.5,
      },
    },
    hide: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <AgentAbilitiesContainer>
      <AbilitiesContainer>
        <AbilitiesHeading>Special Abilities</AbilitiesHeading>
        <AbilitiesIconsContainer>
          {abilities.map((ability, index) => (
            <AbilitiesImage
              src={
                ability.displayIcon ||
                process.env.PUBLIC_URL + `/valoranticon.png`
              }
              onClick={() => handleSelect(ability)}
              selected={selected.displayName === ability.displayName}
              key={index}
              onError={(event) => {
                event.target.src = process.env.PUBLIC_URL + `/valoranticon.png`;
                event.onerror = null;
              }}
            />
          ))}
        </AbilitiesIconsContainer>
        <AbilityDetails
          key={selected.displayName}
          variants={variants}
          animate={"show"}
          initial="hide"
        >
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
