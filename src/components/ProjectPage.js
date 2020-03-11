import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { screen } from './globals/MediaQueries';
import { Button } from './Buttons';

const ProjectPage = props => {
  const { project } = useParams();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (props.data.length > 0) {
    let projectData = props.data.find((p, i) => p.title === project);

    return (
      <Page>
        <Container>
          <span onClick={() => history.goBack()} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon='arrow-left' fixedWidth size='2x' />
          </span>
          <h1>{projectData.title}</h1>
          <Image>
            <img src={projectData.image} />
          </Image>

          <p>{projectData.purpose}</p>

          <Desc>
            {projectData.description.map((d, i) => (
              <div>
                <span>-</span>
                <p key={i}>{d}</p>
              </div>
            ))}
          </Desc>

          <Tech>
            <span>TECH:</span>
            <p>
              {projectData.tech.slice(0, -1).join(' , ') +
                ', ' +
                projectData.tech.slice(-1)}
            </p>
          </Tech>

          <ProjectButtons>
            <Button
              target='_blank'
              rel='noopener noreferrer'
              href={projectData.github}
            >
              View code
            </Button>
            <Button
              target='_blank'
              rel='noopener noreferrer'
              href={projectData.url}
            >
              View
            </Button>
          </ProjectButtons>
        </Container>
      </Page>
    );
  } else {
    return <p>Loading...</p>;
  }
};

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

const Container = styled.div`
  width: 60%;
  padding: 10px;
  margin: 40px 0;
  ${screen.phoneS`
      width:100%`}
  ${screen.phoneM`
      width:100%`}
  ${screen.phoneL`
      width:100%`}
  ${screen.Tablet`
      width:100%`}
  h1 {
    text-align: center;
    font-weight: bold;
    font-size: 3rem;
    ${screen.phoneS`
      font-size:2rem;`}
    ${screen.phoneM`
      font-size:2rem;`}
    ${screen.phoneL`
      font-size:2rem;`}
    ${screen.Tablet`
      font-size:2rem;`}
  }
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 20px 0;
  ${screen.phoneS`
      width:100%;
      height:auto`}
  ${screen.phoneM`
      width:100%;
      height:auto`}
  ${screen.phoneL`
      width:100%;
      height:auto`}
  ${screen.Tablet`
      width:100%;
      height:auto`}
  img {
    width: 50%;
    height: auto;
    ${screen.phoneS`
      width:100%
      height:50%;`}
    ${screen.phoneM`
      width:100%
      height:50%;`}
    ${screen.phoneL`
      width:100%
      height:50%;`}
    ${screen.Tablet`
      width:100%
      height:50%;`}
  }
`;
//images look good

const Desc = styled.div`
  margin-top: 20px;
  div {
    display: flex;
    ${screen.phoneS`
      margin-bottom: 10px;`}
    ${screen.phoneM`
      margin-bottom: 10px;`}
    ${screen.phoneL`
      margin-bottom: 10px;`}
    ${screen.Tablet`
      margin-bottom: 10px;`}
    margin-bottom: 10px;
    span {
      padding: 0 10px 0 0;
    }
  }
`;
const Tech = styled.div`
  border: 1px solid rgb(236, 236, 236);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-width: 1px;
  display: flex;
  flex-direction: column;
  margin: 5% 0;
  span {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: rgb(81, 99, 149);
    background: radial-gradient(
      circle,
      rgba(81, 99, 149, 1) 0%,
      rgba(48, 51, 107, 1) 100%
    );
    color: #fff;
    text-align: center;
  }
  p {
    text-align: center;
    padding: 0 5px;
    font-style: italic;
  }
`;

const ProjectButtons = styled.div`
    display: flex;
    justify-content:space-between;
    ${screen.phoneS`
        flex-direction:column;
    `}
    ${screen.phoneM`
        flex-direction:column;
    `}
    ${screen.phoneL`
        flex-direction:column;
    `}
    ${screen.Tablet`
        flex-direction:column;
    `}
`;
export default ProjectPage;
