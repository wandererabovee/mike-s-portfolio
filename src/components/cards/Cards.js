import React from 'react';
import './Cards.css';

const Card = ({ year, title, description, actions }) => {
  return (
    <div className="card">
      <div className="card-year">{year}</div>
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
      <div className="card-actions">
        {actions.map((action, index) => (
          <a key={index} href={action.url} target="_blank" rel="noopener noreferrer" className="card-action-button">
            {action.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Card;
