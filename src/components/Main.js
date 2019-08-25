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
    height:60px;
    justify-content:center;
    align-items:center;
    margin-top:10px;
    background-color:#516395;
    color:#6b7eb3;
    margin-top:40px;
`

export default Main;