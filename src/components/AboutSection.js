import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { device } from './breakpoints'

import Wrapper from './Wrapper'

import bitmoji from '../images/bitmoji.png'
const AboutSection = () => {
    return(
        // <About id="About">
        <Wrapper id="About" title="About" direction="column" midHeight align="center">
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
        </Wrapper>
    )
}
const AboutWrapper = styled.div`
    display:flex;
    @media(max-width:500px){
        flex-direction:column;
        align-items:center;
        width:100%;
    }
`
const Image = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:50%;
    box-sizing:border-box;
    @media(max-width:500px){
        width:100%;
    }
`
const View = styled.div`
    width:50%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    @media(max-width:500px){
        width:100%;
    }
`
const Icons = styled.div`
    display:flex;
    justify-content:center;

    a{
        color:#155799;
    }

`
export default AboutSection;