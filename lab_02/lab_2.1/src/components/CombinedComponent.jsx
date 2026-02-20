import React from 'react';
import ItemList from './ItemList';

const CombinedComponent = () => {
  const itemsCount = 3; // Можно высчитать динамически

  return (
    <>
      <h2>My Items List</h2>
      <ItemList />
      <p>Total: {itemsCount} items</p>
    </>
  );
};

export default CombinedComponent;
