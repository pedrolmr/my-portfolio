import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from 'react-router-dom';

import styles from '../App.css';
import { screen } from './globals/MediaQueries';
import { Button } from './Buttons';

const Card = props => {
  return (
    <CardSection>
      <ProjectCard isOdd={props.isOdd}>
        <Image className={props.isOdd ? styles.isOdd : null}>
          <img src={props.card.image} alt='project-pic' width='100%' />
        </Image>
        <View>
          <span>{props.card.title}</span>
          <p>{props.card.purpose}</p>

          <Link to={`/${props.card.title}`}>Learn more...</Link>

          <Tech>
            <span>TECH:</span>
            <p>
              {props.card.tech.slice(0, -1).join(' , ') +
                ', ' +
                props.card.tech.slice(-1)}
            </p>
          </Tech>
          <ProjectButtons>
            <Button
              target='_blank'
              rel='noopener noreferrer'
              href={props.card.github}
            >
              View code
            </Button>
            <Button
              target='_blank'
              rel='noopener noreferrer'
              href={props.card.url}
            >
              View
            </Button>
          </ProjectButtons>
        </View>
      </ProjectCard>
    </CardSection>
  );
};

const CardSection = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:45%;
    height:auto;
    padding:0;
    margin:0;
    img{
        height: 100%;
        max-width: 100%;
        display: block;
        margin: auto;
    }
    ${screen.phoneS`
        width:100%`}
     ${screen.phoneM`
        width:100%`}
    ${screen.phoneL`
        width:100%`}
    ${screen.Tablet`
        width:100%`}

`;
const ProjectCard = styled.div`
    display:flex;
    height:100%;
    justify-content:space-between;
    align-items:center;
    margin: ${props => (props.isOdd ? '80px 0' : null)};
    ${screen.phoneS`
        flex-direction:column;
        align-items:center;
        width:100%;
        font-size:0.9rem;
        padding:4% 0;`}
     ${screen.phoneM`
        flex-direction:column;
        align-items:center;
        width:100%;
        font-size:0.9rem;
        padding:4% 0;`}
    ${screen.phoneL`
        flex-direction:column;
        align-items:center;
        width:100%;
        font-size:0.9rem;
        padding:4% 0;`}
    ${screen.Tablet`
        flex-direction:column;
        align-items:center;
        width:100%;
        font-size:0.9rem;
        padding:4% 0;`}
`;
const View = styled.div`
    display:flex;
    width:45%;
    flex-direction: column;
    justify-content:center;
    
    span{
        font-size:1.2rem;
        font-weight:bold;
        text-align:center;
    }
    p{
        margin:5% 0 5% 0;
    }
    ${screen.phoneS`
        width:100%
        order:2
        h2{
            font-size:1.5rem;
            text-align:center;
        }`}
    ${screen.phoneM`
        width:100%
        order:2
        h2{
            font-size:1.5rem;
            text-align:center;
        }`}
    ${screen.phoneL`
        width:100%
        order:2
        h2{
            font-size:1.5rem;
            text-align:center;
        }`}
    ${screen.Tablet`
        width:100%
        order:2
        h2{
            font-size:1.5rem;
            text-align:center;
        }`}
`;
const Desc = styled.div`
  p {
    margin: 0;
    /* font-size:0.9rem; */
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
  }
  p {
    text-align: center;
    padding: 0 5px;
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

export default Card;
