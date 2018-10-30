import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './Header.jsx';
import Gallery from './Gallery.jsx';
import Scroll from './Scroll.jsx';
import './App.css';
import projectData from './projectData.json';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Scroll>
          <Gallery projectData={projectData} />
        </Scroll>
      </div>
    );
  }
}

export default App;
