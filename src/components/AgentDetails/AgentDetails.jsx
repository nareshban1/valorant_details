import React from "react";
import {
  AgentDetailsContainer,
  Biography,
  Headers,
  IconContainer,
  Role,
  RoleIconContainer,
} from "./AgentDetails.css";

const AgentDetails = ({ agentDescription, agentRole, roleIcon, uuid }) => {
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
    <AgentDetailsContainer>
      <Headers>Role</Headers>
      <RoleIconContainer
        key={uuid}
        variants={variants}
        animate={"show"}
        initial="hide"
      >
        <Role>{agentRole}</Role>
        <IconContainer src={roleIcon} />
      </RoleIconContainer>
      <Headers>Biography</Headers>
      <Biography
        key={agentDescription}
        variants={variants}
        animate={"show"}
        initial="hide"
      >
        {agentDescription}
      </Biography>
    </AgentDetailsContainer>
  );
};

export default AgentDetails;
