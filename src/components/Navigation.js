import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import { screen } from './globals/MediaQueries';

const Navigation = () => {
    return (
        <div>
            <NavBar>
                <Link activeClass="active" to="TopHeader" spy={true} smooth={true} offset={-70} duration={200}>HOME</Link>
                <Link activeClass="active" to="About" spy={true} smooth={true} offset={-70} duration={200}>ABOUT</Link>
                <Link activeClass="active" to="ProjectSection" spy={true} smooth={true} offset={-70} duration={200}>PROJECTS</Link>
                <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={-70} duration={200}>CONTACT</Link>
            </NavBar>
        </div>
    )
}

const NavBar = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    position:fixed;
    overflow:hidden;
    z-index:1;
    transition:all 0.4s;
    background-color:#516395;
    a{
        padding:10px;
        text-decoration:none;
        color:#fff;
        ${screen.phoneS`font-size:0.7rem`}
        ${screen.phoneM`font-size: 0.7rem`}
    }
 
`
export default Navigation;
