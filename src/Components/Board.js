import React from 'react';
import Column from './Column';

const Board = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Column title="To Do" />
      <Column title="Doing" />
      <Column title="Done" />
    </div>
  );
}

export default Board;