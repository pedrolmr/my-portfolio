import React from 'react';

import Card from './Card';
import Wrapper from './Wrapper';

import styled from 'styled-components';

const ProjectSection = ({ data }) => {
  return (
    <MainWrapper id='ProjectSection' title='Projects' lineBreak>
      {data.map((card, i) => (
        <Card key={i} isOdd={i % 2} card={card} index={i} />
      ))}
    </MainWrapper>
  );
};

const MainWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export default ProjectSection;
