import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';

class Header extends Component {
  // handleSearch = event => {
  //   this.props.handleSearch(event);
  // };

  render() {
    return (
      <div className="header">
        <h2 className="header__title">ProjectGallery</h2>
        <input placeholder="Search by Title or Tech" onChange={this.props.handleSearch} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSearch: event => dispatch({ type: 'SEARCH', payload: event.target.value })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
