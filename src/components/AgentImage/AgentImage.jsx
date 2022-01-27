import React from "react";
import { AgentImageContainer, AgentImagePage, Image } from "./AgentImage.css";

const AgentImage = ({ agentImage, uuid }) => {
  const variants = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.3,
      },
    },
    hide: {
      y: -50,
      opacity: 0,
    },
  };
  return (
    <AgentImagePage>
      <AgentImageContainer
        key={uuid}
        variants={variants}
        animate={"show"}
        initial="hide"
      >
        <Image src={agentImage} alt="" />
      </AgentImageContainer>
    </AgentImagePage>
  );
};

export default AgentImage;
