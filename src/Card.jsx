import React, { Component } from 'react';
import './Card.css';

const Card = ({ cardData }) => {
  // <pre>
  // <code>{JSON.stringify(cardData, null, 4)}</code>
  // </pre>
  return (
    <div className="card">
      <a href={cardData.link} target="__blank">
        <img alt={`${cardData.title}`} src={`${process.env.PUBLIC_URL}/images/${cardData.image}`} />
      </a>
      <div className="card__text">
        <h3 className="card__title">{cardData.title}</h3>
        <p className="card__description">{cardData.description}</p>
        <h4 className="card__tech-title">Technologies:</h4>
        <p className="card__techs">{cardData.technologies.join(', ')}</p>
      </div>
    </div>
  );
};

export default Card;
