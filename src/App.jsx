import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './Header.jsx';
import Gallery from './Gallery.jsx';
import './App.css';
import projectData from './projectData.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  handleSearch = event => {
    this.setState({
      search: event.target.value
    });
  };

  render() {
    return (
      <div>
        <Header handleSearch={this.handleSearch} />
        <Gallery projectData={projectData} searchString={this.state.search} />
      </div>
    );
  }
}

export default App;
