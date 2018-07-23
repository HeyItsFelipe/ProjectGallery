import React, { Component } from 'react';
import Card from './Card.jsx';

const Gallery = ({ projectData, searchString }) => {
  let searchResults = projectData['projects']
    .filter(element => {
      let title = element['title'];
      let techString = element['technologies'].join(' ');
      return `${title} ${techString}`.toUpperCase().indexOf(searchString.toUpperCase()) > -1;
    })
    .map(element => {
      return <Card cardData={element} />;
    });

  return <div>{searchResults}</div>;
};

export default Gallery;
