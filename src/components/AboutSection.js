import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Wrapper from './Wrapper'
import { screen } from './globals/MediaQueries'

import bitmoji from '../images/bitmoji.png'
const AboutSection = () => {
    return(
        <MainWrapper id="About" title="About" direction="column" midHeight align="center" lineBreak>
           <AboutWrapper>
                <Image>
                    <img src={bitmoji} alt="bitmoji" width="50%"/>
                </Image>
                <View>
                    <p>I'm a software developer with a passion for web development. My primary focus is JavaScript but I've worked with multiple programming languages including Python and C. You can take a look at the Projects section to see my work.</p>
                    <Icons>
                        <a href="mailto:moverapedro@gmail.com"><FontAwesomeIcon icon='envelope-square' fixedWidth size="2x"/></a>
                        <a href="https://github.com/pedrolmr" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github-square']} fixedWidth size="2x"/></a>
                        <a href="https://www.linkedin.com/in/pedromontesinos" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} fixedWidth size="2x" /></a>
                    </Icons>
                </View>
            </AboutWrapper>
        </MainWrapper>
    )
}
const MainWrapper = styled(Wrapper)`
    display:flex;
    justify-content:center;
    /* border:2px solid purple; */
`
const AboutWrapper = styled.div`
    display:flex;
    width:80%;
    /* border:2px solid pink; */
    ${screen.phoneS`
        flex-direction:column;
        align-items:center;
        width:100%;
        font-size:0.9rem;
        text-align:center;`
    }
     ${screen.phoneM`
        flex-direction:column;
        align-items:center;
        width:100%;
        font-size:0.9rem;
        text-align:center;`}
    ${screen.phoneL`
        flex-direction:column;
        align-items:center;
        width:100%;
        font-size:0.9rem;
        text-align:center;`}
    ${screen.Tablet`
        flex-direction:column;
        align-items:center;
        width:100%;
        font-size:0.9rem;
        text-align:center;`}

`
const Image = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    box-sizing:border-box;
    img{
        width:30%;
    }
    ${screen.phoneS`width:100%`}
    ${screen.phoneM`width:100%`}
    ${screen.phoneL`width:100%`}
    ${screen.Tablet`width:100%`}
`
const View = styled.div`
    display:flex;
    width:100%;
    flex-direction: column;
    justify-content:center;
    /* border:3px solid blue; */
    p{
        margin:5% 0;
        text-align:center;
    }
    ${screen.phoneS`width:80%`}
    ${screen.phoneM`width:80%`}
    ${screen.phoneL`width:80%`}
    ${screen.Tablet`width:80%`}
`
const Icons = styled.div`
    display:flex;
    justify-content:center;
    a:nth-child(1){
        color:#64c3e0;     
    }
    a:nth-child(2){
        color:#000;
    }
    a:nth-child(3){
        color:#155799;
    }

`
export default AboutSection;