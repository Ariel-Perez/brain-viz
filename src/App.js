import React, { Component } from 'react';
import './App.css';
import './brain/Brain.css';
import Brain from './brain/Brain.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          brain-viz
        </div>
        <div className="App-body">
          <Brain live={true} numLayers="10" numInputs="10"/>
        </div>
      </div>
    );
  }
}

export default App;
