import React, { Component } from 'react';
import styled from 'styled-components';

import Card from './Card';

import iphone1 from '../images/connectourkids_mockup1.png'
import browser from '../images/Web-Browser-Mockup.png'

class ProjectSection extends Component {
    static defaultProps = {
        data: [
            {
                image: iphone1,
                title: 'Connect Our Kids',
                description: 'Connect Our Kids is an App built with React Native to help kids in foster homes find families.This tool will help social workers quickly place foster kids into permanent homes using family tree finding(similar to Ancestry.com), case file management and data integrations(similar to Facebook).',
                tech: ['React', 'Redux']
            },
            {
                image: browser,
                title: 'S&J Architects',
                description: 'Smith and Jones Architects is a fully-responsive, multi-page marketing website that I built to showcase the skills I learned during my first month in Lambda School. The tech used is: HTML, CSS (Less), and JavaScript.',
                tech: ['HTML', 'Less', 'JavaScript']
            },

            
            
        ]
    }
    render(){
        return (
            <Projects id="ProjectSection">
                <h1>Projects</h1>
                {this.props.data.map((card, i) => <Card odd={i % 2} card={card}/>)}
            </Projects>
        )
    }
}
const Projects = styled.div`
    width:80%
    padding:40px;
    border-bottom: 1px solid #ededed;
    h1{
        text-align:center;
    }
`

export default ProjectSection;