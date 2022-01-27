import React, { useState } from "react";
import AgentDetails from "../../components/AgentDetails/AgentDetails";
import AgentImage from "../../components/AgentImage/AgentImage";
import AgentsNameList from "../../components/AgentsNameList/AgentsNameList";
import {
  AgentListContainer,
  AgentListContent,
  AgentHeaderContainer,
  AgentHeroSection,
  ImageDetailsContainer,
  MobileAgentListContent,
} from "./AgentList.css";
import { useApi } from "../../api/useApi";
import AgentAbilities from "../../components/AgentAbilities/AgentAbilities";
import { defaultSelected } from "../../utilities/default";

const AgentList = () => {
  const [selected, setSelected] = useState(defaultSelected);
  const agents = useApi(
    "https://valorant-api.com/v1/agents?isPlayableCharacter=true"
  );

  return (
    <AgentListContainer>
      <AgentHeroSection>
        <AgentHeaderContainer>
          <>
            {agents.loading ? null : (
              <>
                <AgentListContent>
                  <AgentsNameList
                    agentNames={agents?.data?.data}
                    setSelected={setSelected}
                    selected={selected}
                  />

                  <AgentImage
                    agentImage={selected.fullPortrait}
                    uuid={selected.uuid}
                  />

                  <AgentDetails
                    agentDescription={selected.description}
                    agentRole={selected.role.displayName}
                    roleIcon={selected.role.displayIcon}
                    uuid={selected.uuid}
                  />
                </AgentListContent>

                <MobileAgentListContent>
                  <ImageDetailsContainer>
                    <AgentDetails
                      agentDescription={selected.description}
                      agentRole={selected.role.displayName}
                      roleIcon={selected.role.displayIcon}
                      uuid={selected.uuid}
                    />
                    <AgentsNameList
                      agentNames={agents?.data?.data}
                      setSelected={setSelected}
                      selected={selected}
                    />
                  </ImageDetailsContainer>
                  <AgentImage agentImage={selected.fullPortrait} />
                </MobileAgentListContent>

                <audio hidden autoPlay key={selected.uuid}>
                  <source
                    src={selected?.voiceLine.mediaList[0].wave}
                    type="audio/wav"
                  />
                </audio>
              </>
            )}
          </>
        </AgentHeaderContainer>
      </AgentHeroSection>
      <AgentAbilities
        abilities={selected.abilities}
        bustImage={selected.bustPortrait}
      />
    </AgentListContainer>
  );
};

export default AgentList;
