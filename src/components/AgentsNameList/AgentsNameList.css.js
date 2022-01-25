import styled from "styled-components";


export const AgentNameListContainer = styled.div`
    font-family: 'TungstenBold';
    color:white;
    font-size: 7rem;
    position: relative;
    overflow: hidden;
    height: 100%;
    width:max-content;
    z-index: 5;
    
    
`

export const AgentNameListWrapper = styled.div`
    overflow: auto;
    position: relative;
    height:100%;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
        display: none;
    }
   
`
export const AgentNames = styled.ul`
    position: relative;
`

export const AgentName = styled.li`
    cursor: pointer;
    line-height: 1;
    transition: margin 300ms ease-in-out;
    text-transform: uppercase;

    &:hover{
        margin-left: 1rem;
    }
    display: flex;

    color: ${(props) => props.selected ? "#FE4456" : "white"};
`

export const AgentNumber = styled.span`
    font-size: 1.5rem;
    margin-right: 0.5rem;
    margin-top: 1.1rem;
`