import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSearch = event => {
    this.props.handleSearch(event);
  };

  render() {
    return (
      <div className="header">
        <h2 className="header__title">ProjectGallery</h2>
        <input placeholder="Search by Title or Tech" onChange={this.handleSearch} />
      </div>
    );
  }
}

export default Header;
