import React from 'react';
import { useRouteMatch, useParams } from 'react-router-dom';

const ProjectPage = () => {
  const { project } = useParams();

  console.log('PROJECT', project);
  return <p>{project} info here</p>;
};

export default ProjectPage;
