import styled from "styled-components";
import { motion } from "framer-motion";
export const AgentImagePage = styled.div`
    position: absolute;
    height:100%;
    width:100%;
    display: grid;
    place-items: center;
    z-index: 0;

    @media(max-width:980px){
        position: relative;
        height: 100%;
        width: 100%;
        display: block;
       
        
        
    }
    @media(max-width:800px){
        display: none;
    }

   
    
`
export const AgentImageContainer = styled(motion.div)`
    width: 60%;
    @media(max-width:980px){
        width: 150%;
        margin-left: -150px;
    }

   

    
`


export const Image = styled.img`
    height:100%;
    width:100%;
`