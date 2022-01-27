import styled from "styled-components";
import { motion } from "framer-motion";

export const AgentAbilitiesContainer = styled.div`
    width: min(1320px, 100%);
    margin:0 auto;
    color:#0E1921;
    display: flex;
    align-items: center;
    height: auto;
    padding: 1rem;
    @media(max-width:898px){
        flex-direction: column-reverse;
    
    }
   

    

`

export const AbilitiesContainer = styled.div`
     width: 50%;
     @media(max-width:898px){
        width: 100%;
    
    }
`

export const AbilitiesIconsContainer = styled.div`
    display: flex;
    margin-top: 1rem;
  
    
`

export const AbilitiesHeading = styled.h1`
    font-family: 'TungstenBold';
    text-transform: uppercase;
    font-size: 4rem;
    letter-spacing: 2px;
    color:#0E1921;
`

export const AbilitiesImage = styled.img`
    max-height: 100px;
    max-width: 100px;
    background-color:${(props) => props.selected ? "#FE4456" : "#A6A39E"}  ;
    margin:10px;
    padding: 5px;
    transition: background-color 300ms ease-in-out;
    cursor: pointer;

    &:first-child{
        margin-left: 0;
    }

    @media(max-width:500px){
        min-height: 40px;
        min-width: 40px;
    }

`

export const AbilityDetails = styled(motion.div)`
    margin-top: 1.5rem;
`
export const AbilityName = styled.h2`
 font-size: 1.8rem;
 text-transform: uppercase;
 font-family: 'Matroska';
`

export const AbilityDescription = styled.p`
margin-top: 1rem;
font-size: 1.5rem;
font-family: 'Nunito';
line-height: 1.5;
`


export const BustImageContainer = styled.div`
     width: 50%;
    @media(max-width:898px){
        width: 100%;
    }

`
export const BustImage = styled.img`
    width: 100%;
`