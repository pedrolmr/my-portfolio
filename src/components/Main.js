import React from 'react';
import styled from 'styled-components';

import Navigation from './Navigation';
import TopHeader from './TopHeader';
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';
import ContactSection from './ContactSection';
import ProjectPage from './ProjectPage';

import { useRouteMatch, Route } from 'react-router-dom';

const Main = () => {
  const match = useRouteMatch('/:project');
  console.log('Match in Main.js', match);
  return match ? (
    <div>
      <Navigation />
      <ProjectPage />
    </div>
  ) : (
    <div>
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
    </div>
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
