import React from 'react';
import styled from 'styled-components'

import Navigation from './Navigation';
import TopHeader from './TopHeader'
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';
import ContactSection from './ContactSection'

class Main extends React.Component{
    static defaultProps = {
        title: 'this is the homepage'
    }
    render(){
        return(
            <Container>
                <Navigation />

                <TopHeader />

                <AboutSection />

                <BodyContainer>
                    <ProjectSection />

                    <ContactSection />
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
const BodyContainer = styled.div`
    border:5px solid red;
    display:flex;
    flex-direction:column;
    align-items:center;
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