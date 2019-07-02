import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from "./Components/Posts"
import Postform from './Components/Postform';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Postform />
          <Post />
        </header>
      </div>
    );
  }
}

export default App;
