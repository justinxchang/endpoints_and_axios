import React from 'react';
import Card from './Card';

export default function UsersList( { cardsList, handleDelete } ) {
  
  const cards = cardsList.map( (card, i) => {
    return <Card card={card} 
            handleDelete={ handleDelete }
            index={ i } 
            key={ 'card'+i } />
  });

  return <section className="cards">{ cards }</section>;
}