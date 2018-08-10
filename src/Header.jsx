import React from 'react';
import './Header.css';
import { connect } from 'react-redux';
import { search } from './redux/actions/index';

const mapDispatchToProps = dispatch => {
  return {
    handleSearch: event => dispatch(search(event))
  };
};

const Header = ({ handleSearch }) => {
  return (
    <div className="header">
      <h2 className="header__title">ProjectGallery</h2>
      <input placeholder="Search by Title or Tech" onChange={handleSearch} />
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
