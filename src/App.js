import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background">
          <Navigation />
        </div>
      </div>
    );
  }
}

export default App;
