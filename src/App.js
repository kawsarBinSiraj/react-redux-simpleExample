import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { Provider } from 'react-redux';
import store from './store';
import Count from './components/count/Count';
import Control from './components/Control.js/Control';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Count />
            <Control />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
