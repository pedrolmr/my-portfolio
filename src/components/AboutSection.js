import React from 'react';
import styled from 'styled-components';

const AboutSection = () => {
    return(
        <About id="About">
            <AboutWrapper>
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus a hendrerit molestie. Morbi laoreet placerat magna, eget pulvinar lectus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus a hendrerit molestie. Morbi laoreet placerat magna, eget pulvinar lectus.</p>
            </AboutWrapper>
        </About>
    )
}
const About = styled.div`
    display:flex;
    color: #000;
    padding:5%;
    margin-top:-45px;
    justify-content:center;

    h1{
        text-align:center;
    }
`
const AboutWrapper = styled.div`
    width:50%;
`
export default AboutSection;