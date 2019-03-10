import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
border: 0;
outline: 0;
background: transparent;
border-bottom: 1px solid #CBCBCB;
width: 100%;
font-size: 1em;
height: 2em;
`
const TextInput = (props) => {

  return(
    <Input
      name={props.name}
      onChange={props.onChange}
      value={props.value}
    />
  )
}

export default TextInput;
