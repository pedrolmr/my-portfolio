import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
`
const TopHeaderDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:100%;
    color:#fff;
    width:50%;
    h1{
        font-size:3rem;
        @media(max-width:500px){
            line-height:1em;
        }
    }

    p{
        font-size:1.5rem;
    }
    a{
        color:#fff;
    }
`


export default TopHeader;