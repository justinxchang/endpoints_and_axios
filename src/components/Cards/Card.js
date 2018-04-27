import React from 'react';

export default function Card( { card, handleDelete, index } ) {
  return <div className="card"
              onClick={() => handleDelete(index)} >
            <h2 className="card-text">
              {card}
            </h2>
          </div>
}