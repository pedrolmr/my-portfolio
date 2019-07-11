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
    border:2px solid black;
    justify-content:center;

    a{
        padding:10px;
        border:1px solid black;
        text-decoration:none;
        color:#000;
    }

`
// const NavLink = styled.a`
//     padding:10px;
//     border:1px solid black;
//     text-decoration:none;
//     color:#000;
// `
export default Navigation;