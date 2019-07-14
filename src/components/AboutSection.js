import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import bitmoji from '../images/bitmoji.png'
const AboutSection = () => {
    return(
        <About id="About">
            <h1>About</h1>
            <AboutWrapper>
                <Image>
                    <img src={bitmoji} alt="bitmoji image" width="50%" />
                </Image>
                <View>
                    <p>I'm a software developer with a passion for web development. My primary focus is JavaScript but I've worked with multiple programming languages including Python and C. You can take a look at the Projects section to see my work.</p>
                    <Icons>
                        <a href="mailto:pedrolmr1998@gmail.com"><FontAwesomeIcon icon='envelope-square' fixedWidth size="2x"/></a>
                        <a href="https://github.com/pedrolmr" target="_blank"><FontAwesomeIcon icon={['fab', 'github-square']} fixedWidth size="2x"/></a>
                        <a href="https://www.linkedin.com/in/pedrolmr1998/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} fixedWidth size="2x" /></a>
                    </Icons>
                </View>
            </AboutWrapper>
        </About>
    )
}
const About = styled.div`
    display:flex;
    color: #000;
    padding:5%;
    margin:0;
    padding:0;
    flex-direction:column;
    align-items:center;
    h1{
        text-align:center;
    }
`
const AboutWrapper = styled.div`
    display:flex;
    width:50%;
`
const Image = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:50%;

`
const View = styled.div`
    width:50%;
    display:flex;
    flex-direction: column;
    align-self:flex-end;
`
const Icons = styled.div`
    display:flex;
    justify-content:center;

    a{
        color:#155799;
    }

`
export default AboutSection;