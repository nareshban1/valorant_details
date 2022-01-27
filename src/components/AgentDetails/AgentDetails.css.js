import styled from "styled-components";
import { motion } from "framer-motion";
export const AgentDetailsContainer = styled.div`
    color:white;
    width:300px;
    font-family: 'TungstenBold';
    @media(max-width:980px){
        width:100%;
      
        
    }

`
export const RoleIconContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    @media(max-width:980px){
        
    }
`

export const IconContainer = styled.img`
    height: 50px;
    margin-left: 1rem;
`

export const Role = styled.h1`
    font-size: 4rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    @media(max-width:980px){
        font-size: 3rem; 
    }
`

export const Biography = styled(motion.p)`
    margin-top: 0.5rem;
    font-size: 1rem;
    font-family: 'Nunito';
    line-height: 1.5;
    @media(max-width:980px){
        font-size: 1rem;
    }

`

export const Headers = styled.p`
    font-size: 1rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: 'Matroska';
    margin-top: 1rem;
    @media(max-width:980px){
        font-size: 0.8rem;
    }

`