import styled from "styled-components";

export const ArsenalPageContainer = styled.section`
`

export const ArsenalContentContainer = styled.div`
    width:min(1320px,100%);
    margin: 0 auto;
    padding: 1rem;
`

export const HeaderFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
`
export const ArsenalContentHeader = styled.h1`
    font-family: 'TungstenBold';
    letter-spacing: 2px;
    font-size: 8rem;
    color:#0E1921;
    text-transform: uppercase;
    
`


export const ArsenalGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    margin: 4rem auto;
    
    @media(max-width:650px){
        grid-template-columns: repeat(1,1fr);
    }
`
