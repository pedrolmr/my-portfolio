import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopHeader = () => {
    return (
        <Header id="TopHeader">
            <TopHeaderDiv>
                <h1>Pedro Montesinos</h1>
                <FontAwesomeIcon icon="fas fa-sort-down" fixedWidth size="2x" />
            
            </TopHeaderDiv>
        </Header>
    )
}
const Header = styled.div`
    background: #614385;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #516395, #614385);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #516395, #614385); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    padding:5%;
    
  
    text-align:center;
    -webkit-clip-path: polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);
    clip-path: polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);
    height:50vh;
`
const TopHeaderDiv = styled.div`
    color:#fff;
    width:50%;
    transform: translate(50%, 50%)
`

export default TopHeader;