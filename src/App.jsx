import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './Header.jsx';
import Gallery from './Gallery.jsx';
import './App.css';
import projectData from './projectData.json';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Gallery projectData={projectData} />
      </div>
    );
  }
}

export default App;
