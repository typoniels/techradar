import React from 'react';

export default function({ children, alt }) {
  return (
    <div className="hero-headline font-weight-bold mb-3">
      {children}
      <span className="hero-headline__alt"> {alt}</span>
    </div>
  );
}
