import React from 'react';
import styled from 'styled-components';

import TopHeader from './TopHeader';
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';
import ContactSection from './ContactSection';
import ProjectPage from './ProjectPage';
import Navigation from './Navigation';

const Main = props => {
  return (
    <div>
      <TopHeader />
      <BodyContainer>
        <AboutSection />
        <ProjectSection data={props.data} />
        <ContactSection />
      </BodyContainer>{' '}
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
