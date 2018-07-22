import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './Header.jsx';
import './App.css';
import preload from './projectData.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.setState({
      search: event.target.value
    });
  }

  render() {
    let result = preload['projects'].filter((element, index, array) => {
      let title = element['title'];
      let techString = element['technologies'].join(' ');
      return `${title} ${techString}`.toUpperCase().indexOf(this.state.search.toUpperCase()) > -1;
    });
    return (
      <div>
        <Header handleSearch={this.handleSearch} />
        <pre>
          <code>{JSON.stringify(result, null, 4)}</code>
        </pre>
      </div>
    );
  }
}

export default App;
