
import React, { Component } from 'react';
import Display from './Display';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hii,This is react app!</h1>
      <Display name='john' age='26' />
      <Display name='wick' age='20'/> 
      </div>
    );
  }
}

export default App;
