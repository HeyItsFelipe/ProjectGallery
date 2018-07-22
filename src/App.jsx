import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './Header.jsx';
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
    let searchResult = projectData['projects'].filter(element => {
      let title = element['title'];
      let techString = element['technologies'].join(' ');
      return `${title} ${techString}`.toUpperCase().indexOf(this.state.search.toUpperCase()) > -1;
    });
    return (
      <div>
        <Header handleSearch={this.handleSearch} />
        <pre>
          <code>{JSON.stringify(searchResult, null, 4)}</code>
        </pre>
      </div>
    );
  }
}

export default App;
