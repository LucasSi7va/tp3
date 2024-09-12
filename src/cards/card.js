import React from 'react';  

const Card = ({ name, description }) => {
  return (
    <div className="card">
      <h2 className="Card-name">{name}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;