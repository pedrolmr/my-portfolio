import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import { screen } from './globals/MediaQueries';

const Navigation = () => {
  const [navColor, setNavColor] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', NavChangeColor);
  }, []);

  const NavChangeColor = () => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > 50) {
      setNavColor('');
      setNavColor('#516395');
    } else {
      setNavColor('#516395');
      setNavColor('');
    }
  };

  return (
    <div>
      <NavBar color={navColor}>
        <Link
          activeClass='active'
          to='TopHeader'
          spy={true}
          smooth={true}
          offset={-70}
          duration={200}
        >
          HOME
        </Link>
        <Link
          activeClass='active'
          to='About'
          spy={true}
          smooth={true}
          offset={-70}
          duration={200}
        >
          ABOUT
        </Link>
        <Link
          activeClass='active'
          to='ProjectSection'
          spy={true}
          smooth={true}
          offset={-70}
          duration={200}
        >
          PROJECTS
        </Link>
        <Link
          activeClass='active'
          to='Contact'
          spy={true}
          smooth={true}
          offset={-70}
          duration={200}
        >
          CONTACT
        </Link>
      </NavBar>
    </div>
  );
};

const NavBar = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;
  position: fixed;
  overflow: hidden;
  z-index: 1;
  transition: all 0.4s;
  background-color: ${props => (props.color ? props.color : null)};
  a {
    padding: 10px;
    text-decoration: none;
    color: #fff;
    ${screen.phoneS`font-size:0.7rem`}
    ${screen.phoneM`font-size: 0.7rem`}
        cursor: pointer;
    transition: 0.2s;
  }
  a:hover {
    background: #5f72a3;
  }
`;
export default Navigation;
