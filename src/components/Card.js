import React from 'react';
import styled from 'styled-components';

import styles from '../App.css'

const Card = (props) => {
    console.log(props.odd)
    return(
        <CardSection>
            <ProjectCard>
                <Image className={props.odd ? styles.odd : null}>
                    <img src={props.card.image} alt="project image" />
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
    border:3px solid purple;

    img{
        width:50%;
        border:3px solid red;
    }
`
const ProjectCard = styled.div`
    display:flex;
    height:100%;
`
const View = styled.div`
    border:3px solid black;
    display:flex;
    width:50%;
    flex-direction: column
    justify-content:center;
`
const ProjectButtons = styled.div`
    display flex;

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