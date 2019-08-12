import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { screen } from './globals/MediaQueries'

const TopHeader = () => {
    return (
        <Header id="TopHeader">
            <TopHeaderDiv>
                <h1>Pedro Montesinos</h1>
                <p>FullStack Developer</p>
            <a href="#About"><FontAwesomeIcon icon="angle-double-down" fixedWidth size="3x"/></a>  
            </TopHeaderDiv>
        </Header>
    )
}
const Header = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background: #614385;
    background: -webkit-linear-gradient(to top, #516395, #614385);
    background: linear-gradient(to top, #516395, #614385);

    text-align:center;
    -webkit-clip-path: polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);
    clip-path: polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);
    height:50vh;
    padding-top:44px;
`
const TopHeaderDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin:0;
padding:0;
border:2px solid purple;
${screen.phoneS`
    border: 3px solid purple
`}
/* @media(max-width:360px){
    border:1px solid black;
    margin-top:44px;
} */
    color:#fff;
    
    h1{
        font-size:3rem;
        border:1px solid black;
        @media(max-width:768px){
            border:1px solid black;
            line-height:1em;
        }
        @media(max-width:500px){
            line-height:1em;
        }
    }

    p{
        font-size:1.5rem;
        border:1px solid black;
         @media(max-width:768px){
            border:1px solid black;
        }
    }
    a{
        color:#fff;
    }
`


export default TopHeader;