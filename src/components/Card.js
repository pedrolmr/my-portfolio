import React from 'react';
import styled from 'styled-components';

import styles from '../App.css'
import { screen } from './globals/MediaQueries'
import { Button } from './Buttons';

const Card = (props) => {
    return(
        <CardSection>
            <ProjectCard>
                <Image className={props.isOdd ? styles.isOdd : null}>
                    <img src={props.card.image} alt="project-pic" width={props.isOdd ? '100%' : '50%'}/>
                </Image>
                <View>
                    <h2>{props.card.title}</h2>
                    <p>{props.card.description}</p>

                    {/*<ProjectButtons>
                        <a target="_blank" rel="noopener noreferrer" href={props.card.github}>View code</a>
                        <a target="_blank" rel="noopener noreferrer" href={props.card.url}>View</a>
                    </ProjectButtons>*/}

                    <ProjectButtons>
                        <Button target="_blank" rel="noopener noreferrer" href={props.card.github}>View code</Button>
                        <Button target="_blank" rel="noopener noreferrer" href={props.card.url}>View</Button>
                    </ProjectButtons>

                </View>
            </ProjectCard>
        </CardSection>
    );

}

const CardSection = styled.div`
    display: flex;
    flex-direction: column;
`
const Image = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:50%;
    img{
        height:auto;
    }

`
const ProjectCard = styled.div`
    display:flex;
    height:100%;
    ${screen.phoneS`
        flex-direction:column;
        align-items:center;
        width:100%;
        font-size:0.8rem;`
    }
     ${screen.phoneM`
        flex-direction:column;
        align-items:center;
        width:100%;
        font-size:0.8rem;`
    }
    ${screen.phoneL`
        flex-direction:column;
        align-items:center;
        width:100%;
        font-size:0.8rem;`
    }
    ${screen.Tablet`
        flex-direction:column;
        align-items:center;
        width:100%;
        font-size:0.8rem;`
    }
`
const View = styled.div`
    display:flex;
    padding:5%;
    width:50%;
    flex-direction: column;
    justify-content:center;
    h2{
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
        }`
    }
    ${screen.phoneM`
        width:100%
        order:2
        h2{
            font-size:1.5rem;
            text-align:center;
        }`
    }
    ${screen.phoneL`
        width:100%
        order:2
        h2{
            font-size:1.5rem;
            text-align:center;
        }`
    }
    ${screen.Tablet`
        width:100%
        order:2
        h2{
            font-size:1.5rem;
            text-align:center;
        }`
    }
`
const ProjectButtons = styled.div`
    display: flex;
    justify-content:space-between;
    ${screen.Tablet`
        flex-direction:column;
    `
    }
    /* a{
        border:1px solid grey;
        display:flex;
        flex-direction: row;
        width:100%;
        justify-content:center;
        text-decoration:none;
        color: #000;
    } */
`

export default Card;