import React from "react";
import { AgentImageContainer, Image } from "./AgentImage.css";

const AgentImage = ({ agentImage }) => {
  return (
    <AgentImageContainer>
      <Image src={agentImage} alt="" />
    </AgentImageContainer>
  );
};

export default AgentImage;
