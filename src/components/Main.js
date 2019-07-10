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
                            <View>
                                <LeftViewLink href="#">View code</LeftViewLink>
                                <RightViewLink href="#">View</RightViewLink>
                            </View>
                        </BoxLeft>

                        <BoxRight>
                            <h2>S&J Architects</h2>
                            <img src="https://via.placeholder.com/300"/>
                            <View>
                                <LeftViewLink href="#">View code</LeftViewLink>
                                <RightViewLink href="#">View</RightViewLink>
                            </View>
                        </BoxRight>
                    </BoxSection>
                </ProjectSection>

                <ContactSection>
                    <ContactContainer>
                        <form action="POST" data-netlify="true">
                            <Input type="name" name="name" placeholder="Name" />
                            <Input type="email" name="email" placeholder="Email" />
                            <div data-netlify-recaptcha="true"></div>
                            <Textarea type="message" name="message" placeholder="Message" />
                            <InputButton type="submit" value="Submit" />
                        </form>
                    </ContactContainer>
                </ContactSection>
            </div>
        );
    }
}
const TopHeader = styled.div`
    background: #5433FF;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #A5FECB, #20BDFF, #5433FF);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #A5FECB, #20BDFF, #5433FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    padding:10%;
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
    transform: translate(50%)
`
const AboutSection = styled.div`
    text-align:center;
    color: #fff;
    background-color:#5433ff;
    padding:40px;
    margin-top:-45px;
`
const Input = styled.input`
    width:100%
`
const Textarea = styled.textarea`
    width:100%
`
const InputButton = styled.input`
    border: 3px solid blue;
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
    width:50%;
    height:100%;
`
const BoxRight = styled.div`
    display:flex;
    border: 3px solid black;
    flex-direction:column;
    align-self:flex-end;
    width:50%;
    height:100%;
`
const ContactSection = styled.div`
    display:flex;
    border: 3px solid blue;
    justify-content:center;

`
const ContactContainer = styled.div`
    border: 3px solid purple;
    width:50%;
`
const View = styled.div`
    display:flex;
    border: 3px solid blue;
    flex-direction: row;
`
const LeftViewLink = styled.a`
    display:flex;
    border: 3px solid black;
    flex-direction: row;
    width:100%;
    justify-content:center;
    text-decoration:none;
    color:#000;
`
const RightViewLink = styled.a`
    display:flex;
    border: 3px solid black;
    flex-direction: row;
    width:100%;
    justify-content:center;
    text-decoration:none;
    color:#000;
`

export default Main;