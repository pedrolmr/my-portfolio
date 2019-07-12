import React from 'react';
import styled from 'styled-components';

import iphone1 from '../images/connectourkids_mockup1.png'
// import iphone2 from '../images/connectourkids_mockup2.png'
import browser from '../images/Web-Browser-Mockup.png'


const ProjectSection = () => {
    return (
        <Projects id="ProjectSection">
            <h1>Projects</h1>
            <BoxSection>
                <BoxLeft>
                    <Image>
                        <img src={iphone1} alt="iphone image" width="50%"/>
                        
                    </Image>
                    <View>
                        <h2>Connect Our Kids</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus a hendrerit molestie. Morbi laoreet placerat magna, eget pulvinar lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus a hendrerit molestie. Morbi laoreet placerat magna, eget pulvinar lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus a hendrerit molestie. Morbi laoreet placerat magna, eget pulvinar lectus.</p>
                        <ProjectButtons>
                            <LeftViewLink href="#">View code</LeftViewLink>
                            <RightViewLink href="#">View</RightViewLink>
                        </ProjectButtons>
                    </View>
                </BoxLeft>

                <BoxRight>
                    <View>
                        <h2>S&J Architects</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus a hendrerit molestie. Morbi laoreet placerat magna, eget pulvinar lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus a hendrerit molestie. Morbi laoreet placerat magna, eget pulvinar lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus a hendrerit molestie. Morbi laoreet placerat magna, eget pulvinar lectus.</p>
                        <ProjectButtons>
                            <LeftViewLink href="#">View code</LeftViewLink>
                            <RightViewLink href="#">View</RightViewLink>
                        </ProjectButtons>
                    </View>
                    <Image>
                        <img src={browser} alt="web browser image" width="100%"/>
                    </Image>
                </BoxRight>
            </BoxSection>
        </Projects>
    )
}
const Projects = styled.div`
    width:50%;
    padding:40px;
    border:3px solid red;
`
const BoxSection = styled.div`
    display: flex;
    flex-direction: column;
`
const Image = styled.div`
    display:flex;
    border:3px solid purple;
    justify-content:space-around;
    align-items:center;
    width:50%;

    img{
        border:1px solid black;
    }

`
const BoxLeft = styled.div`
    border:3px solid black;
    display:flex;
  
    align-self:flex-start;

    height:100%;
`
const BoxRight = styled.div`
    border:3px solid black;
    display:flex;
   
    align-self:flex-end;

    height:100%;
`
const View = styled.div`
    width:50%;
    display:flex;
    padding:3%;
    flex-direction: column
    justify-content:center;
`
const ProjectButtons = styled.div`
    display flex;
    border:1px solid black;
`
const LeftViewLink = styled.a`
    border:1px solid grey;
    display:flex;
    flex-direction: row;
    width:100%;
    justify-content:center;
    text-decoration:none;
    color:#000;
`
const RightViewLink = styled.a`
    border:1px solid grey;
    display:flex;
    flex-direction: row;
    width:100%;
    justify-content:center;
    text-decoration:none;
    color:#000;
`
export default ProjectSection;