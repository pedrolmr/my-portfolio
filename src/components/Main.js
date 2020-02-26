import React from 'react';
import styled from 'styled-components';

import { Switch, Route } from 'react-router-dom';

import Navigation from './Navigation';
import TopHeader from './TopHeader';
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';
import ContactSection from './ContactSection';
import ProjectPage from './ProjectPage';

const Main = () => {
  return (
    <>
      <Navigation />
      <TopHeader />
      <BodyContainer>
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </BodyContainer>
      <Footer>
        <p>&copy;Pedro Montesinos 2020</p>
      </Footer>
    </>
  );
};
const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Footer = styled.div`
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: #516395;
  color: #5f72a3;
  letter-spacing: 0;
`;

export default Main;
