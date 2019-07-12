import React from 'react';
import styled from 'styled-components';

const Navigation = () => {
    return (
        <NavBar>
            <a href="#TopHeader">HOME</a>
            <a href="#About">ABOUT</a>
            <a href="#ProjectSection">PROJECTS</a>
            <a href="#Contact">CONTACT</a>
        </NavBar>
    )
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
    }

`
export default Navigation;