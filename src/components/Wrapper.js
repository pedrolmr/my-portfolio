import React from "react";
import styled from "styled-components";

const Wrapper = ({ className, title, children, midHeight,id }) => {
    return (
        <div className={className} midHeight={midHeight}>
        <label style={{ paddingTop: '44px', opacity: '0'}} id={id}>{id}</label>
        <h1 style={{ textAlign:'center', fontWeight:'bold', fontSize:'1.5rem' }}>{title}</h1>
        {children}
        </div>
    );
};

const CustomWrapper = styled(Wrapper)`
  display: 'flex';
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  align-items: ${props => props.align ? props.align : null};
  height: ${props => (props.midHeight ? "50%" : "100%")};
  padding:10px;
  margin:10px;
  border-bottom: 1px solid #ededed;
  line-height:1.5;
  text-transform: uppercase;
  width: ${props => props.width ? props.width : null};

`;

export default CustomWrapper;
