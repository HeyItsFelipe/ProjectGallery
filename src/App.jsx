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
      return element['title'].toUpperCase().indexOf(this.state.search.toUpperCase()) > -1;
    });
    return (
      <div>
        <Header />
        <pre>
          <code>{JSON.stringify(result, null, 4)}</code>
        </pre>
      </div>
    );
  }
}

export default App;
