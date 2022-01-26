import styled from "styled-components";
import backgroundImage from "../../assets/images/valorant.png"




export const AgentListContainer = styled.section`
     height:1500px;
   
`

export const AgentHeroSection = styled.div`
        height: 100vh;
        overflow: hidden;
`

export const AgentHeaderContainer = styled.div`
        background-image: url(${backgroundImage});
        height: 80vh;
        background-size: cover;
        background-position: 50% 0;
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
        @media(max-width:980px){
                display:none;
    }
   
`




export const MobileAgentListContent = styled.div`
        height: 100%;
        width: min(1320px,100%);
        margin:0 auto;
        position: relative;
        display:none;

        @media(max-width:980px){
                display: flex;
                align-items: center;
                
        }

        @media(max-width:800px){
                display: flex;
                
        }
   
`

export const ImageDetailsContainer = styled.div`
        display: flex;
        position: relative;
        flex-direction: column;
        height: 100%;
        width: 100%;
        align-items:center;
        justify-content: center;
        overflow: hidden;
        

`

