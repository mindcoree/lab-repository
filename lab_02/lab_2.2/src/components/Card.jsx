// src/components/Card.jsx
import React from 'react';

const Card = ({ title, children, className = "" }) => {
  return (
    // Используем выражение для динамического className
    <article className={`card ${className}`}>
      <h3>{title}</h3>
      <div className="card-content">
        {children}
      </div>
    </article>
  );
};

export default Card;