import React from 'react';

const ItemList = () => {
  // Массив данных (Task 2)
  const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' }
  ];

  return (
    <ul>
      {/* Метод .map превращает массив в список элементов <li> */}
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;