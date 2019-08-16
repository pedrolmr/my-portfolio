import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';

import { screen } from './globals/MediaQueries'
import Wrapper from './Wrapper';

const TopHeader = () => {
    return (
        <Header id="TopHeader" align="center" direction="column">
            <TopHeaderDiv>
                <h1>Pedro Montesinos</h1>
                <p>FullStack Developer</p>
                <Link activeClass="active" to="About" spy={true} smooth={true} offset={-70} duration={200}><FontAwesomeIcon icon="angle-double-down" fixedWidth size="3x" /></Link>
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
    height:60vh;
    margin:0;
    ${screen.phoneS`height:30vh`}
`
const TopHeaderDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    align-self:center;
    ${screen.phoneS`font-size:1rem;`}
    a{
        color:#fff;
        margin-top:5vh;
        ${screen.phoneS`
            margin-top:0vh;
            font-size:0.5rem;
            `
        }
    }
    color:#fff;
    
    h1{
        font-size:3rem;
        ${screen.phoneS`font-size:1.5rem`}
    }
`


export default TopHeader;