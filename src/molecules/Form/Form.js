import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import TextInput from '../../atoms/TextInput/TextInput';
import SingleSelect from '../../atoms/SingleSelect/SingleSelect';
import Button from '../../atoms/Button/Button';


const CATEGORY_OPTIONS = [
  "Groceries", "Eating & Drinking Out",
  "Transport", "Bills", "Boring Stuff", "Fun Stuff",
  "Boring Non-Stuff", "Fun Non-Stuff", "Salary", "Misc.", "New Cat",
]

const FormContainer = styled.div`
  justify-content: left;
  margin: 2%;
  width: 80%;
  heigth: 80%;
`

const FormRow = styled.div`
  display: flex;
  justify-content: left;
  align-items: baseline;
`

const ButtonRow = styled.div`
  display: flex;
  justify-content: right;
  align-items: baseline;
  width:100%;
  margin-left:80%;
  margin-top: 15%;
`

const FormInputLabel = styled.p`
  text-align: left;
  margin-right: 2%;
`

async function getUser() {
  const axios = require('axios');
  const response = await fetch('http://localhost:3001/users/3')
  .then((res) => res.json())
  .catch(err => console.log(err));
  return response;
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      amount: '',
      record_type: 'Spend',
      category: 'Groceries',
      description: '',
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleOnChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    const user = await getUser();
    this.props.store.set('user', user);
  }

  render() {
    const { formType } = this.props;

    return(
      <FormContainer>
        <h3>{formType === 'edit' ? 'Edit' : 'Create New'} Record</h3>
        <form onSubmit={this.handleSubmit}>
        <FormRow>
          <FormInputLabel>Amount</FormInputLabel>
          <TextInput
            onChange={this.handleOnChange}
            value={this.state.amount}
            name={'amount'}
          />
        </FormRow>
        <FormRow>
          <FormInputLabel>Record Type</FormInputLabel>
          <SingleSelect
            name={'record_type'}
            value={this.state.record_type}
            options={['Spend', 'Incoming']}
            onChange={this.handleOnChange}
          />
        </FormRow>
        <FormRow>
          <FormInputLabel>Category</FormInputLabel>
          <SingleSelect
            name={'category'}
            value={this.state.category}
            options={CATEGORY_OPTIONS}
            onChange={this.handleOnChange}
          />
        </FormRow>
        <FormRow>
          <FormInputLabel>Description</FormInputLabel>
          <TextInput
            onChange={this.handleOnChange}
            name={'description'}
            value={this.state.description}
          />
        </FormRow>
        <ButtonRow>
          <Button text={'Cancel'} type={"cancel"} onClick={this.props.onRequestClose} />
          <Button text={'Submit'} type={"submit"} />
        </ButtonRow>
        </form>
      </FormContainer>
    )
  }
};

export default Form;
