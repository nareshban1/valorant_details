import styled from "styled-components";

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
    z-index: 10;
    background-color: #0E1921;
    height:110px;
`

export const Logo = styled.h1`
font-family:'Valorant';
font-size: 2.5rem;
color:transparent;
-webkit-text-stroke: 0.1px #FE4456;
letter-spacing: 2px;
cursor: pointer;
transition: 300ms ease;
&:hover{
    -webkit-text-stroke:none;
    color:#FE4456;
}

`
export const NavLinksContainer = styled.nav`
    

`
export const NavLinks = styled.ul`
margin-top: 1rem;
display:flex;
align-items:center;
font-size:1rem;
font-family:"Matroska";
cursor: pointer;

`
export const Links = styled.li`
    width:150px;
    text-align: center;
    transition: 0.3s ease;
  

    &:first-child{
        margin-left: 0;
    }

    &:hover{
        letter-spacing: 0.2rem;
    }
`