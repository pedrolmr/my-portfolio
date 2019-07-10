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

                <AboutSection>
                    <h1>About</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus a hendrerit molestie. Morbi laoreet placerat magna, eget pulvinar lectus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus a hendrerit molestie. Morbi laoreet placerat magna, eget pulvinar lectus.</p>
                </AboutSection>

                <ProjectSection>
                    <h1>Projects</h1>
                    <BoxSection>
                        <BoxLeft>
                            <h2>Connect Our Kids</h2>
                            <img src="https://via.placeholder.com/300"/>
                            <a href="#">View</a>
                        </BoxLeft>

                        <BoxRight>
                            <h2>S&J Architects</h2>
                            <img src="https://via.placeholder.com/300"/>
                            <a href="#">View</a>
                        </BoxRight>
                    </BoxSection>
                </ProjectSection>
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
    color:#fff;
    width:50%;
    transform: translate(50%, -20%)
`
const AboutSection = styled.div`
    text-align:center;
    color: #fff;
    background-color: #d4d5d6;
    padding:40px;
    margin-top:-40px;
`
const ProjectSection = styled.div`
    border: 3px solid black;
    padding:40px;
`
const BoxSection = styled.div`
    display: flex;
    flex-direction: column;
    border: 3px solid purple;

`
const BoxLeft = styled.div`
    display:flex;
    border: 3px solid black;
    flex-direction:column;
    align-self:flex-start;
`
const BoxRight = styled.div`
    display:flex;
    border: 3px solid black;
    flex-direction:column;
    align-self:flex-end;
`


export default Main;