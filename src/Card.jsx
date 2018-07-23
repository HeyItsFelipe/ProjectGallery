import React, { Component } from 'react';

const Card = ({ cardData }) => {
  return (
    <div>
      <pre>
        <code>{JSON.stringify(cardData, null, 4)}</code>
      </pre>
    </div>
  );
};

export default Card;
