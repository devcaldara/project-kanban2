import React, { useState } from 'react';
import Card from './Card';

const Column = ({ title }) => {
  const [cards, setCards] = useState([]);

  const handleAddCard = () => {
    const newCardText = prompt('Enter card text:');
    if (newCardText) {
      setCards([...cards, newCardText]);
    }
  };

  return (
    <div style={{ backgroundColor: 'lightblue', padding: '8px', borderRadius: '4px', minWidth: '200px' }}>
      <h3>{title}</h3>
      {cards.map((card, index) => (
        <Card key={index} text={card} />
      ))}
      <button onClick={handleAddCard}>Add Card</button>
    </div>
  );
}

export default Column;