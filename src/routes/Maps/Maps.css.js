import styled from "styled-components";
export const MapsContainer = styled.section`
    
`

export const MapsContentContainer = styled.div`
    position: relative;
    width: min(1320px,100%);
    margin: 0 auto;
    padding: 1rem;
`


export const MapsHeader = styled.h1`
    font-family: 'TungstenBold';
    font-size: 8rem;
    color:#0E1921;
    text-transform: uppercase;
    position: absolute;
    z-index: 10;
`

export const CarouselContainer = styled.div`
    position: relative;
    
`

export const CarouselImage = styled.img`
    height: 500px;
    width: 100%;
    object-fit: cover;
    @media(min-width:768px){
        height: 600px;
    }
`

export const MapInfo = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   background-color:#0E1921;
   padding: 2rem;
   color:white;
   position: relative;
   transition: all 200ms ease-in-out;
   padding-bottom: 30px;

    @media(min-width:768px){
        width: 400px;
        bottom:0;
        right: 0;
        margin-right: 50px;
        margin-bottom: -50px;
        position: absolute;
    }

    &:before{
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        border-bottom: 30px solid #fff;
        border-left: 30px solid transparent;
        width: 0;
        background-color: transparent;
        
    }

`
export const MapName = styled.h1`
   font-family: 'Matroska';
   letter-spacing: 2px;
    font-size: 1.5rem;
    color:#fe4456;
    text-transform: uppercase;
    
`

export const MapDescription = styled.p`
   font-family: 'Nunito';
    font-size: 1rem;
    margin-top: 10px;
    
`

export const MapsGalleryContainer = styled.div`
    margin:5rem 0;
`
export const MapsGalleryHeader = styled.h1`
    font-family: 'TungstenBold';
    font-size: 5rem;
    color:#0E1921;
    text-transform: uppercase;
    z-index: 10;
`

export const GalleryImage = styled.img`
    height: 600px;
    object-fit: contain;
`



