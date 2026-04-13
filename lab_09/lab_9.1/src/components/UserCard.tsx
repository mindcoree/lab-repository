import { memo } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;
}

// Оптимизированный компонент с помощью memo
export const UserCard = memo(function UserCard({ user }: UserCardProps) {
  console.log("UserCard render"); // Лог для проверки перерисовок
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
});

// Альтернативный вариант с кастомной функцией сравнения (как просят в задании)
export const UserCardWithCompare = memo(
  function UserCardWithCompare({ user }: UserCardProps) {
    console.log("UserCardWithCompare render");
    return (
      <div style={{ border: '1px dashed #666', padding: '10px', margin: '10px 0' }}>
        <h3>{user.name} (Custom Compare)</h3>
        <p>{user.email}</p>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Возвращаем true, если пропсы равны (чтобы предотвратить рендер)
    return prevProps.user.id === nextProps.user.id && 
           prevProps.user.name === nextProps.user.name;
  }
);
