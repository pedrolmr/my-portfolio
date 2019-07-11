import React from 'react';
import styled from 'styled-components';

const TopHeader = () => {
    return (
        <Header>
            <TopHeaderDiv>
                <h1>Pedro Montesinos</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus a hendrerit molestie. Morbi laoreet placerat magna, eget pulvinar lectus.</p>
            </TopHeaderDiv>
        </Header>
    )
}
const Header = styled.div`
    background: #614385;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #516395, #614385);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #516395, #614385); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    padding:5%;
    background-size: cover;
    background-position: top;
    text-align:center;
    -webkit-clip-path: polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);
    clip-path: polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);
    height:30vh;
`
const TopHeaderDiv = styled.div`
    color:#fff;
    width:50%;
    transform: translate(50%, 50%)
`

export default TopHeader;