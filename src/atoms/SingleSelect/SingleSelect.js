import React from 'react';
import styled from 'styled-components';

const SelectContainer = styled.div`
  border: 1px solid #CBCBCB;
  margin: 2%;
  height: 2em;
`

const Select = styled.select`
  width: 100%;
  border-radius: 0;
  background-color: white;
  border: none;
  height: 100%;
  outline: none;
`

const Option = styled.option`
  font-color: black;
  background-color: white;
  width: 100%;
`

const SingleSelect = (props) => {

  const optionComponents = [];

  props.options.forEach((opt) => {
    optionComponents.push(<Option key={opt} value={opt}>{opt}</Option>)
  })

  return(
    <SelectContainer>
      <Select onChange={props.onChange} name={props.name} value={props.value} >
        {optionComponents}
      </Select>
    </SelectContainer>
  )

}

export default SingleSelect;
