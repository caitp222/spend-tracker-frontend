import React from 'react';
import styled from 'styled-components';

const Button = (props) => {

  const StyledButton = styled.button`
    background-color: ${props.type === "cancel" ? "red" : "grey"};
    border: none;
    color: ${props.type === "cancel" ? "white" : "black"};
    padding: 15px 32px;
    margin: 2px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  `

  return(
    <StyledButton>{props.text}</StyledButton>
  )
};

export default Button;
