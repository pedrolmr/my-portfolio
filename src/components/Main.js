import React from 'react';
import styled from 'styled-components'

class Main extends React.Component{
    static defaultProps = {
        title: 'this is the homepage'
    }
    render(){
        return(
            <Container>
                <NavBar>
                    <NavLink href="#">HOME</NavLink>
                    <NavLink href="#">ABOUT</NavLink>
                    <NavLink href="#">PROJECTS</NavLink>
                    <NavLink href="#">CONTACT</NavLink>
                </NavBar>
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

                <BodyContainer>
                    <ProjectSection>
                        <h1>Projects</h1>
                        <BoxSection>
                            <BoxLeft>
                                <Image>
                                    <img src="https://via.placeholder.com/300" />
                                </Image>
                                <View>
                                    <h2>Connect Our Kids</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus a hendrerit molestie. Morbi laoreet placerat magna, eget pulvinar lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus a hendrerit molestie. Morbi laoreet placerat magna, eget pulvinar lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus a hendrerit molestie. Morbi laoreet placerat magna, eget pulvinar lectus.</p>
                                    <ProjectButtons>
                                        <LeftViewLink href="#">View code</LeftViewLink>
                                        <RightViewLink href="#">View</RightViewLink>
                                    </ProjectButtons>
                                </View>
                            </BoxLeft>

                            <BoxRight>
                                <View>
                                    <h2>S&J Architects</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus a hendrerit molestie. Morbi laoreet placerat magna, eget pulvinar lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus a hendrerit molestie. Morbi laoreet placerat magna, eget pulvinar lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus a hendrerit molestie. Morbi laoreet placerat magna, eget pulvinar lectus.</p>
                                    <ProjectButtons>
                                        <LeftViewLink href="#">View code</LeftViewLink>
                                        <RightViewLink href="#">View</RightViewLink>
                                    </ProjectButtons>
                                </View>
                                <Image>
                                    <img src="https://via.placeholder.com/300" />
                                </Image>
                            </BoxRight>
                        </BoxSection>
                    </ProjectSection>

                    <ContactSection>
                        <ContactContainer>
                            <form name="contact" method="POST">
                                <input type="hidden" name="form-name" value="contact" />
                                <InputWrapper>
                                    <TwoInputs>
                                        <Input type="name" name="name" placeholder="Name" />
                                        <Input type="email" name="email" placeholder="Email" />
                                    </TwoInputs>
                                </InputWrapper>


                                <Textarea type="message" name="message" placeholder="Message" />
                                <ButtonWrapper>
                                    <Buttons>
                                        <SubmitButton type="submit">Send</SubmitButton>
                                        <ClearButton>Clear</ClearButton>
                                    </Buttons>
                                </ButtonWrapper>
                            </form>
                        </ContactContainer>
                    </ContactSection>
                </BodyContainer>

                <Footer>
                    <p>&copy;Pedro Montesinos 2019</p>
                </Footer>
            </Container>
        );
    }
}
const Container = styled.div`
    border: 5px solid purple;

`
const NavBar = styled.div`
    display:flex;
    border:2px solid black;
    justify-content:center;

`
const NavLink = styled.a`
    padding:10px;
    border:1px solid black;
    text-decoration:none;
    color:#000;
`
const TopHeader = styled.div`
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
const AboutSection = styled.div`
    text-align:center;
    color: #000;
   
    padding:5%;
    margin-top:-45px;
`
const BodyContainer = styled.div`
    border:5px solid red;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const ProjectSection = styled.div`
    width:50%;
    padding:40px;
    border:3px solid red;
`
const BoxSection = styled.div`
    display: flex;
    flex-direction: column;
`
const Image = styled.div`
    border:3px solid purple;

`
const BoxLeft = styled.div`
    border:3px solid black;
    display:flex;
  
    align-self:flex-start;

    height:100%;
`
const BoxRight = styled.div`
    border:3px solid black;
    display:flex;
   
    align-self:flex-end;

    height:100%;
`
const View = styled.div`
    border:3px solid red;
    display:flex;
    padding:3%;
    flex-direction: column
`
const ProjectButtons = styled.div`
    display flex;
    border:1px solid black;
`
const LeftViewLink = styled.a`
    border:1px solid grey;
    display:flex;
    flex-direction: row;
    width:100%;
    justify-content:center;
    text-decoration:none;
    color:#000;
`
const RightViewLink = styled.a`
    border:1px solid grey;
    display:flex;
    flex-direction: row;
    width:100%;
    justify-content:center;
    text-decoration:none;
    color:#000;
`
const ContactSection = styled.div`
    display:flex;
    justify-content:center;
    width:50%;
    border:3px solid blue;

`
const ContactContainer = styled.div`
    width:50%;
    justify-content: space-between;
`
const InputWrapper = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom:10px;

`
const TwoInputs = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
`

const Input = styled.input`
    display:flex;
    width:49%
    font-size:15px;
    padding:10px;
    box-sizing : border-box;
    outline:none;

`
const Textarea = styled.textarea`
    width:100%
    height:200px;
    font-size:15px;
    padding:15px;
    box-sizing : border-box;
    outline:none;
`
const ButtonWrapper = styled.div`
    border:1px solid black;
    display:flex;
    justify-content:center;
`
const Buttons = styled.div`
    border:2px solid purple;
    display:flex;
    width:75%;
    justify-content:space-between;
    gi
`

const SubmitButton = styled.button`
    border: 1px solid #d1cfcf;
    border-radius:3px;
    text-align:center;
    padding:15px;
    width:49%;
    font-size:15px;
`
const ClearButton = styled.button`
    border: 1px solid #d1cfcf;
    border-radius:3px;
    text-align:center;
    padding:15px;
    width:49%;
    font-size:15px;
`
const Footer = styled.div`
    display:flex;
    border: 1px solid #000;
    height:60px;
    justify-content:center;
    align-items:center;
    margin-top:10px;
`

export default Main;