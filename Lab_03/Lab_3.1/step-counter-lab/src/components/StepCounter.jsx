import React, { useState } from 'react';

const StepCounter = ({ initialValue = 0, step = 1 }) => {
  // Инициализация состояний (Task 1 & 2)
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState([]);
  const [operationCount, setOperationCount] = useState(0);

  const handleUpdate = (type) => {
    const newCount = type === 'increment' ? count + step : count - step;

    setCount(newCount);
    // Добавляем новое значение в начало массива истории
    setHistory([newCount, ...history]);
    setOperationCount(prev => prev + 1);
  };

  const resetCounter = () => {
    setCount(initialValue);
    setHistory([]);
    setOperationCount(0);
  };

  return (
    <div style={{ border: '2px solid #646cff', padding: '20px', margin: '20px', borderRadius: '12px', textAlign: 'left' }}>
      <h3>Счетчик (Шаг: {step})</h3>
      <p>Текущее значение: <strong style={{ fontSize: '1.5em' }}>{count}</strong></p>
      <p>Выполнено операций: {operationCount}</p>

      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => handleUpdate('increment')}>+{step}</button>
        <button onClick={() => handleUpdate('decrement')}>-{step}</button>
        <button onClick={resetCounter} style={{ backgroundColor: '#ff4747', color: 'white' }}>Сброс</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h4>История (последние 5):</h4>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {history.slice(0, 5).map((val, index) => (
            <li key={index} style={{ color: index === 0 ? '#646cff' : '#666' }}>
              Изменение {history.length - index}: <strong>{val}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StepCounter;
