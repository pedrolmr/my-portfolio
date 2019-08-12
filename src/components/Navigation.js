import React, { Component } from 'react';
import styled from 'styled-components';

import { screen } from './globals/MediaQueries'

class Navigation extends Component {
    render(){
        return (
            <div>
                <NavBar>
                    <a href="#TopHeader">HOME</a>
                    <a href="#About">ABOUT</a>
                    <a href="#ProjectSection">PROJECTS</a>
                    <a href="#Contact">CONTACT</a>
                </NavBar>
            </div>
        )

    }

}

const NavBar = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    position:fixed;
    overflow:hidden;
    z-index:1;
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
