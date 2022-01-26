import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavbarContainer = styled.header`
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #FE4456;
    box-sizing: border-box;
    /* position: fixed; */
    color:#FE4456;
    z-index: 50;
    background-color: #0E1921;
    height:100px;
`

export const Logo = styled.h1`
font-family:'Valorant';
color:#FE4456;
letter-spacing: 2px;
cursor: pointer;
transition: 300ms ease;
&:hover{
    -webkit-text-stroke:#FE4456 0.1px;
    color:transparent;
}

`
export const NavLinksContainer = styled.nav`
    width: 100%;
    display: grid;
    place-items: center;

    

`
export const NavLinks = styled.ul`
margin-top: 1rem;
display:flex;
align-items:center;



`
export const Links = styled.li`
    width:150px;
    text-align: center;
    font-size:1rem;
    font-family:"Matroska";
    transition: 0.3s ease;
    z-index: 100;
    cursor: pointer;

    &:first-child{
        margin-left: 0;
    }

    &:hover{
        letter-spacing: 0.2rem;
    }
    @media(max-width:500px){
        font-size: 0.7rem;
        width: 80px;
    }
`

export const RouteLink = styled(Link)`
    color:#FE4456;
`