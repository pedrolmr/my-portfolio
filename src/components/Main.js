import React from 'react';
import styled from 'styled-components'

import Navigation from './Navigation';
import TopHeader from './TopHeader'
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';
import ContactSection from './ContactSection'

const Main = () => {
   
    return(
        <Container>
        <Navigation/>
            <TopHeader/>
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
const Container = styled.div`

`
const BodyContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Footer = styled.div`
    display:flex;
    height:50px;
    justify-content:center;
    align-items:center;
    background-color:#516395;
    color:#5f72a3;
    letter-spacing:0;
`

export default Main;