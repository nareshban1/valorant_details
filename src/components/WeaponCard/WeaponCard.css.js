import styled from "styled-components";

export const WeaponInfo = styled.div`
position: absolute;
top:0;
left: 0;
background-color: rgba(254, 68, 86, .95);
height: 100%;
width: 100%;
padding: 2rem;
display: none;
color:white;
`

export const ArsenalCard = styled.div`
border: 1px solid #BDBCB7;
padding: 2rem;
position: relative;
cursor: pointer;

&:hover{
 ${WeaponInfo}{
     display: block;
 }
}
`
export const WeaponName = styled.h1`
font-family: 'TungstenBold';
letter-spacing: 2px;
font-size: 5rem;
color: ${({ color }) => color} ;
text-transform: uppercase;
`

export const WeaponImageContainer = styled.div`
height: 200px;
width: 100%;

`
export const WeaponImage = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
`

export const StatHeader = styled.p`
font-family: "Matroska";
transform:scaleY(1.05);
letter-spacing: 2px;
`
export const StatData = styled.span`
font-family: 'Matroska';
font-size:0.8rem;

`

export const DamageDataContainer = styled.div`
@media(max-width:1124px){
    display: none;
}
`

export const DamageContainer = styled.div`
margin-top: 10px;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
`

export const DamageCard = styled.div`
font-family: "TungstenBold";
font-size: 1.2rem;
letter-spacing: 2px;
border:1px solid white;
`

export const DamageRange = styled.p`
width: 100%;
text-align:center;
border-bottom: 1px solid white;
`
export const DamageType = styled.p`
width: 100%;
text-align:center;
padding:0.5rem;
display: flex;
flex-direction: column;

`
export const DamageValue = styled.span`
font-size: 1rem;
`
export const DamageFlex = styled.div`
display: flex;
`
