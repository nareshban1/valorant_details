import React from "react";
import {
  AgentDetailsContainer,
  Biography,
  Headers,
  IconContainer,
  Role,
  RoleIconContainer,
} from "./AgentDetails.css";

const AgentDetails = ({ agentDescription, agentRole, roleIcon }) => {
  return (
    <AgentDetailsContainer>
      <Headers>Role</Headers>
      <RoleIconContainer>
        <Role>{agentRole}</Role>
        <IconContainer src={roleIcon} />
      </RoleIconContainer>
      <Headers>Biography</Headers>
      <Biography>{agentDescription}</Biography>
    </AgentDetailsContainer>
  );
};

export default AgentDetails;
