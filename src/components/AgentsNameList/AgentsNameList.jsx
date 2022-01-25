import React from "react";
import {
  AgentName,
  AgentNameListContainer,
  AgentNameListWrapper,
  AgentNames,
  AgentNumber,
} from "./AgentsNameList.css";

const AgentsNameList = ({ agentNames, selected, setSelected }) => {
  const handleSelect = (agent) => {
    setSelected(agent);
  };
  return (
    <AgentNameListContainer>
      <AgentNameListWrapper>
        <AgentNames>
          {agentNames?.map((agent, index) => (
            <AgentName
              key={agent.uuid}
              selected={selected.uuid === agent.uuid}
              onClick={() => handleSelect(agent)}
            >
              <AgentNumber>{("0" + (index + 1)).slice(-2)}</AgentNumber>
              {agent.displayName}
            </AgentName>
          ))}
        </AgentNames>
      </AgentNameListWrapper>
    </AgentNameListContainer>
  );
};

export default AgentsNameList;
