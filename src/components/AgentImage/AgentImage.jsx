import React from "react";
import { AgentImageContainer, AgentImagePage, Image } from "./AgentImage.css";

const AgentImage = ({ agentImage }) => {
  return (
    <AgentImagePage>
      <AgentImageContainer>
        <Image src={agentImage} alt="" />
      </AgentImageContainer>
    </AgentImagePage>
  );
};

export default AgentImage;
