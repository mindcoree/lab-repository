import React, { useState } from 'react';
import UserProfile from './UserProfile';

const UserApp = () => {
  const [userId, setUserId] = useState(1);

  // Функция для генерации случайного ID от 1 до 10 (Task 2)
  const handleRefresh = () => {
    const randomId = Math.floor(Math.random() * 10) + 1;
    setUserId(randomId);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Lab 3.2: API Fetching</h1>
      
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button onClick={() => setUserId(1)}>User 1</button>
        <button onClick={() => setUserId(2)}>User 2</button>
        <button onClick={() => setUserId(3)}>User 3</button>
        <button 
          onClick={handleRefresh} 
          style={{ backgroundColor: '#2ecc71', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer', borderRadius: '5px' }}
        >
          Случайный пользователь (Refresh)
        </button>
      </div>

      {/* Передаем userId как пропс (Task 3) */}
      <UserProfile userId={userId} />

      <footer style={{ marginTop: '30px', fontSize: '0.9em', color: '#666', fontStyle: 'italic' }}>
        {/* Комментарий для Task 3.3 */}
        Примечание: userId добавлен в массив зависимостей useEffect, чтобы компонент 
        автоматически делал новый запрос к API при изменении пропса.
      </footer>
    </div>
  );
};

export default UserApp;
