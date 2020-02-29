import React, { useState, useEffect } from 'react';

import Card from './Card';
import Wrapper from './Wrapper';
import data from '../data';

import styled from 'styled-components';

const initialData = data;
const ProjectSection = ({ data }) => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   setData(initialData);
  // }, [data]);

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
