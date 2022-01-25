import styled from "styled-components";
import backgroundImage from "../../assets/images/valorant.png"




export const AgentListContainer = styled.section`
     height:1500px;
   
`

export const AgentHeroSection = styled.div`
height: 100vh;
`

export const AgentHeaderContainer = styled.div`
        background-image: url(${backgroundImage});
        height: 70vh;
        background-size: cover;
        background-repeat: no-repeat;
        padding: 1rem;
        padding-bottom: 0;
`

export const AgentListContent = styled.div`
        height: 100%;
        display: flex;
        align-items: center;
        width: min(1320px,100%);
        margin:0 auto;
        position: relative;
        justify-content: space-between;
   
`

