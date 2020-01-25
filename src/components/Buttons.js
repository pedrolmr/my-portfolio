import styled from 'styled-components';
import { screen } from './globals/MediaQueries'

const Transform = (pixels, boxShadow) => {
    return `transform: translateY(${pixels}px); box-shadow: ${boxShadow}`;
};

export const Button = styled.a`
  outline: none;
  border: none;
  width:45%;
  cursor: pointer;
  background-color: #30336b;
  color: white;
  border-radius: 10px;
  text-decoration:none;
  text-align:center;
  text-transform:uppercase;
  letter-spacing:90;
  padding: 15px 0;
  box-shadow: 0 6px #130f40;
  transition: all 0.2s;
  &:hover {
    ${Transform(3, "0 4px #130f40")}
  }
  &:active {
    ${Transform(6, "none")}
    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }
    ${screen.phoneS`
        width:100%;
        margin-bottom:10px;
    `
    }
    ${screen.phoneM`
        width:100%;
        margin-bottom:10px;
    `
    }
    ${screen.phoneL`
        width:100%;
        margin-bottom:10px;
    `
    }
    ${screen.Tablet`
        width:100%;
        margin-bottom:10px;
    `
    }
`;
