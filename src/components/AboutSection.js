import React from 'react';
import styled from 'styled-components';

const AboutSection = () => {
    return(
        <About>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus a hendrerit molestie. Morbi laoreet placerat magna, eget pulvinar lectus.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque lectus a hendrerit molestie. Morbi laoreet placerat magna, eget pulvinar lectus.</p>
        </About>
    )
}
const About = styled.div`
    text-align:center;
    color: #000;
   
    padding:5%;
    margin-top:-45px;
`
export default AboutSection;