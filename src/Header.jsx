import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <h2 className="header__title">ProjectGallery</h2>
        <input placeholder="Search Projects" />
      </div>
    );
  }
}

export default Header;
