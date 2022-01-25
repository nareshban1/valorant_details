import { createGlobalStyle } from "styled-components"
import Matroska from '../assets/fonts/Matroska.ttf';
import Valorant from '../assets/fonts/Valorant.ttf';
import TungstenBold from '../assets/fonts/TungstenBold.ttf';

export const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
    }

    @font-face {
        font-family: 'Matroska';
        src: local('Matroska'), local('Matroska'),
        url(${Matroska}) format('truetype');
        font-style: normal;
    }

    @font-face {
        font-family: 'Valorant';
        src: local('Valorant'), local('Valorant'),
        url(${Valorant}) format('truetype');
        font-style: normal;
    }

    @font-face {
        font-family: 'TungstenBold';
        src: local('TungstenBold'), local('TungstenBold'),
        url(${TungstenBold}) format('truetype');
        font-style: normal;
    }

    /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #FE4456; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #FE4456; 
}

    
`