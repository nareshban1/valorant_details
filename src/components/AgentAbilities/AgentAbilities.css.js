import styled from "styled-components";


export const AgentAbilitiesContainer = styled.div`
    width: min(1320px, 100%);
    margin:0 auto;
    color:#0E1921;
    display: flex;
    align-items: center;
    height: 800px;
    margin-top: 5rem;
    

`

export const AbilitiesContainer = styled.div`
   
  
`

export const AbilitiesIconsContainer = styled.div`
    display: flex;
    margin-top: 1rem;
    
`

export const AbilitiesHeading = styled.h1`
    font-family: 'TungstenBold';
    text-transform: uppercase;
    font-size: 4rem;
    color:#0E1921;
`

export const AbilitiesImage = styled.img`
    height: 100px;
    width: 100px;
    background-color:${(props) => props.selected ? "#FE4456" : "#A6A39E"}  ;
    margin:10px;
    padding: 5px;
    transition: background-color 300ms ease-in-out;
    cursor: pointer;

    &:first-child{
        margin-left: 0;
    }

`

export const AbilityDetails = styled.p`
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

export const BustImage = styled.img`
    
`