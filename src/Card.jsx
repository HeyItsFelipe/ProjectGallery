import React from 'react';
import './Card.css';

const Card = ({ cardData }) => {
  return (
    <div className="card">
      <a href={cardData.link} target="__blank">
        <img alt={`${cardData.title}`} src={`${cardData.image}`} title={`${cardData.title}`} />
      </a>
      <div className="card__text">
        <h3 className="card__title">{cardData.title}</h3>
        <p className="card__description">{cardData.description}</p>
        <div className="card__links">
        {cardData.link !== '' ? (
          <a href={cardData.link} target="__blank">
            Site
          </a>
        ) : (
          ''
        )}
          <span>&nbsp;&nbsp;</span>
          {cardData.github !== '' ? (
            <a href={cardData.github} target="__blank">
              Source
            </a>
          ) : (
            ''
          )}
        </div>
        <h4 className="card__tech-title">Technologies:</h4>
        <p className="card__techs">{cardData.technologies.join(', ')}</p>
      </div>
    </div>
  );
};

export default Card;
