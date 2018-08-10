import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './Header.jsx';
import Gallery from './Gallery.jsx';
import './App.css';
import projectData from './projectData.json';
//import { connect } from 'react-redux';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     search: ''
  //   };
  // }

  // handleSearch = event => {
  //   this.setState({
  //     search: event.target.value
  //   });
  // };

  render() {
    return (
      <div>
        <Header />
        <Gallery projectData={projectData} />
      </div>
    );
  }
}

export default App;
