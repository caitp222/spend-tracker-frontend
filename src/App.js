import React, { Component } from 'react';
import './App.css';
import AppRouter from './router/router';
import ModalProvider from './core/contexts/ModalProvider';
import ModalRoot from './core/contexts/ModalRoot';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ModalProvider>
          <ModalRoot />
          <AppRouter>
          </AppRouter>
        </ModalProvider>
      </div>
    );
  }
}

export default App;
