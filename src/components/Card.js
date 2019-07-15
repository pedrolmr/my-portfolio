import React from 'react';
import styled from 'styled-components';

import styles from '../App.css'

const Card = (props) => {
    console.log(props.odd)
    console.log(props.card.tech.length)
    const tech = () => {
        for (let i = 0; i < props.card.tech.length; i++){
            if(props.card.tech[i] === "redux"){
                return "R"
            }
        }
    }
    return(
        <CardSection>
            <ProjectCard>
                <Image className={props.odd ? styles.odd : null}>
                    <img src={props.card.image} alt="project image" width={props.odd ? '100%' : '50%'}/>
                </Image>
                <View>
                    <h2>{props.card.title}</h2>
                    <p>{props.card.description}</p>

                    <p>Tech: {tech()}</p>
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
`
const View = styled.div`
    display:flex;
    padding:3%;
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