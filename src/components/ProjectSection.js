import React, { Component } from 'react';

import Card from './Card';
import Wrapper from './Wrapper';

import iphone1 from '../images/connectourkids_mockup1.png'
import browser from '../images/Web-Browser-Mockup.png'

class ProjectSection extends Component {
    static defaultProps = {
        data: [
            {
                image: iphone1,
                title: 'Connect Our Kids',
                description: 'Connect Our Kids is an App built with React Native to help kids in foster homes find families.This tool will help social workers quickly place foster kids into permanent homes using family tree finding(similar to Ancestry.com), case file management and data integrations(similar to Facebook).',
                url:'https://expo.io/@connectourkids/connectOurKids?release-channel=staging',
                github:'https://github.com/labs13-connect-kids/mobile',
                tech: ['React', 'Redux']
            },
            {
                image: browser,
                title: 'S&J Architects',
                description: 'Smith and Jones Architects is a fully-responsive, multi-page marketing website that I built to showcase the skills I learned during my first month in Lambda School.',
                url: 'https://ecstatic-almeida-9a80ca.netlify.com/',
                github: 'https://github.com/pedrolmr/User-Interface-Project-Week',
                tech: ['HTML', 'Less', 'JavaScript']
            },

            
            
        ]
    }
    render(){
        return (
            <Wrapper id="ProjectSection" title="Projects" last>
                {this.props.data.map((card, i) => <Card isOdd={i % 2} card={card}/>)}
            </Wrapper>
        )
    }
}
// const Projects = styled.div`
//     width:80%;
//     padding:40px;
//     border-bottom: 1px solid #ededed;
//     h1{
//         text-align:center;
//     }
// `

export default ProjectSection;