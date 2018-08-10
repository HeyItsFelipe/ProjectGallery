import React from 'react';
import Card from './Card.jsx';
import './Gallery.css';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    search: state.search
  };
};

const Gallery = ({ projectData, search }) => {
  let searchResults = projectData['projects']
    .filter(element => {
      let title = element['title'];
      let techString = element['technologies'].join(' ');
      return `${title} ${techString}`.toUpperCase().indexOf(search.toUpperCase()) > -1;
    })
    .map(element => {
      return <Card key={element.id} cardData={element} />;
    });

  return (
    <div>
      <div className="gallery">{searchResults}</div>
    </div>
  );
};

export default connect(mapStateToProps)(Gallery);
