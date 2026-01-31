import React, { useState, useEffect } from 'react';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Task 2: Инициализация AbortController для отмены запроса
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchUser = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { signal });
        
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        
        const data = await response.json();
        setUser(data);
      } catch (err) {
        // Если запрос был отменен контроллером, не обновляем состояние ошибки
        if (err.name === 'AbortError') {
          console.log('Предыдущий запрос отменен');
        } else {
          setError(err.message);
        }
      } finally {
        // Проверяем, не был ли запрос отменен, прежде чем выключать загрузку
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchUser();

    // Task 2: Функция очистки (Cleanup)
    // Срабатывает при размонтировании или перед следующим запуском эффекта
    return () => {
      abortController.abort();
    };
  }, [userId]); // Task 3: userId в массиве зависимостей

  if (loading) return <h3 style={{ color: '#646cff' }}>Загрузка данных пользователя...</h3>;
  if (error) return <div style={{ color: 'red', fontWeight: 'bold' }}>Произошла ошибка: {error}</div>;

return (
  <div className="user-card">
    <h2 style={{ marginTop: 0, color: '#646cff' }}>Профиль пользователя</h2>
    <hr />
    <p><strong>ID:</strong> {user?.id}</p>
    <p><strong>Имя:</strong> {user?.name}</p>
    <p><strong>Username:</strong> {user?.username}</p>
    <p><strong>Email:</strong> {user?.email}</p>
    <p><strong>Компания:</strong> {user?.company?.name}</p>
    <p><strong>Город:</strong> {user?.address?.city}</p>
  </div>
);
};


export default UserProfile;
