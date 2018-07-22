import React, { Component } from 'react';

const Gallery = ({ projectData, searchString }) => {
  let searchResult = projectData['projects'].filter(element => {
    let title = element['title'];
    let techString = element['technologies'].join(' ');
    return `${title} ${techString}`.toUpperCase().indexOf(searchString.toUpperCase()) > -1;
  });
  return (
    <div>
      <pre>
        <code>{JSON.stringify(searchResult, null, 4)}</code>
      </pre>
    </div>
  );
};

export default Gallery;
