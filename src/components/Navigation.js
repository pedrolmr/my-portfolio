import React from 'react';
import styled from 'styled-components';

const Navigation = () => {
    return (
        <NavBar>
            <NavLink href="#">HOME</NavLink>
            <NavLink href="#">ABOUT</NavLink>
            <NavLink href="#">PROJECTS</NavLink>
            <NavLink href="#">CONTACT</NavLink>
        </NavBar>
    )
}

const NavBar = styled.div`
    display:flex;
    border:2px solid black;
    justify-content:center;

`
const NavLink = styled.a`
    padding:10px;
    border:1px solid black;
    text-decoration:none;
    color:#000;
`
export default Navigation;