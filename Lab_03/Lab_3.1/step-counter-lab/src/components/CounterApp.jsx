import React from 'react';
import StepCounter from './StepCounter';

/**
 * Props это объект, который позволяет передавать данные от родительского компонента к дочернему.
 * CounterApp вниз к ребенку StepCounter и не меняются самим ребенком 
 * React автоматически передает props в компонент как аргумент функции.
 * Поэтому два вызова StepCounter работают обсолютно независимо друг от друга.
 */


const CounterApp = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Панель управления счетчиками</h2>
      
      {/* Первый экземпляр (Task 3.1) */}
      <StepCounter initialValue={0} step={1} />
      
      {/* Второй экземпляр (Task 3.1) */}
      <StepCounter initialValue={10} step={5} />
    </div>
  );
};

export default CounterApp;
