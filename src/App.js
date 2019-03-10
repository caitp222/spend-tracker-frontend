import React, { Component } from 'react';
import './App.css';
import { createStore } from './stores/store';


// clean these up later
import Form from './molecules/Form/Form';
import Modal from './atoms/Modal/Modal';
//

class App extends Component {
  render() {
    return (
      <div className="App">
        <Modal component={<Form />} />
      </div>
    );
  }
}

export default createStore(App);
