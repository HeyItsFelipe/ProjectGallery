import React from 'react';
import Card from './Card.jsx';
import './Gallery.css';

const Gallery = ({ projectData, searchString }) => {
  let searchResults = projectData['projects']
    .filter(element => {
      let title = element['title'];
      let techString = element['technologies'].join(' ');
      return `${title} ${techString}`.toUpperCase().indexOf(searchString.toUpperCase()) > -1;
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

export default Gallery;
