import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { screen } from './globals/MediaQueries'

import Wrapper from './Wrapper';

const TopHeader = () => {
    return (
        // <Header id="TopHeader">
        <Header id="TopHeader" align="center" midHeight direction="column">
            <TopHeaderDiv>
                <h1>Pedro Montesinos</h1>
                <p>FullStack Developer</p>
                <a href="#About"><FontAwesomeIcon icon="angle-double-down" fixedWidth size="3x"/></a>  
                </TopHeaderDiv>
       </Header>
    )
}
const Header = styled(Wrapper)`
    display:flex;
    justify-content:center;
    flex-direction:column;
    background: #614385;
    background: -webkit-linear-gradient(to top, #516395, #614385);
    background: linear-gradient(to top, #516395, #614385);
    align-items:center;
    text-align:center;
    -webkit-clip-path: polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);
    clip-path: polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);
    height:50vh;
    padding:44px 0 0 0;
    margin:0;
`
const TopHeaderDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    align-self:center;
    transform: translateY(50%);
    ${screen.phoneS`
        border: 3px solid purple`
        
    }
    a{
        color:#fff;
        margin-top:5vh;
    }

    color:#fff;
    
    h1{
        font-size:3rem;
        @media(max-width:768px){
            border:1px solid black;
            line-height:1em;
        }
        @media(max-width:500px){
            line-height:1em;
        }
    }

    p{
        /* font-size:1.5rem;
        border:1px solid black; */
         @media(max-width:768px){
            border:1px solid black;
        }
    }
`


export default TopHeader;