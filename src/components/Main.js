import React from 'react';
import styled from 'styled-components'

class Main extends React.Component{
    static defaultProps = {
        title: 'this is the homepage'
    }
    render(){
        return(
            <div>
                <TopHeader>
                    <TopHeaderDiv>
                        <h1>Pedro Montesinos</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus a hendrerit molestie. Morbi laoreet placerat magna, eget pulvinar lectus.</p>
                    </TopHeaderDiv>
                </TopHeader>

                <About></About>
            </div>
        );
    }
}
const TopHeader = styled.div`
    background: #6441A5;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #2a0845, #6441A5);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #2a0845, #6441A5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    padding:10%;
    background-size: cover;
    background-position: top;
    text-align:center;
    -webkit-clip-path: polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);
    clip-path: polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);
`
const TopHeaderDiv = styled.div`
    color:white;
    width:50%;
    transform: translate(50%, -20%)
`
const About = styled.div`
    border:3px solid pink;
    padding:20%;
`

export default Main;