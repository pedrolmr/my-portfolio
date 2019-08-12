import React from 'react';
import styled from 'styled-components';

import styles from '../App.css'
import { screen } from './globals/MediaQueries'

const Card = (props) => {
    return(
        <CardSection>
            <ProjectCard>
                <Image className={props.isOdd ? styles.isOdd : null}>
                    <img src={props.card.image} alt="project image" width={props.isOdd ? '100%' : '50%'}/>
                </Image>
                <View>
                    <h2>{props.card.title}</h2>
                    <p>{props.card.description}</p>

                    <ProjectButtons>
                        <a href="#">View code</a>
                        <a href="#">View</a>
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
    /* @media(max-width: 500px){
        flex-direction:column;
        align-items:center;
    } */
`
const View = styled.div`
    display:flex;
    padding:3%;
    width:50%;
    flex-direction: column;
    justify-content:center;
    h2{
        font-size:1.2rem;
        font-weight:bold;
        text-align:center;
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
    /* @media(max-width: 500px){
        width:100%;
        order: 2;
        h2{
            font-size:1.5rem;
            font-weight:bold;
            text-align:center;
        }
    } */
`
const ProjectButtons = styled.div`
    display: flex;
    a{
        border:1px solid grey;
        display:flex;
        flex-direction: row;
        width:100%;
        justify-content:center;
        text-decoration:none;
        color: #000;
    }
`

export default Card;