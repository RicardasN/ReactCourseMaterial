import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {
  render() {
    //JSX not HTML
    //to remove App div you can use React.Fragment or <>
    return (
      <div className='App'>
        <Navbar />
      </div>
    );
  }
}

export default App;
