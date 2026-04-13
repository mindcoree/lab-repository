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
  console.log("UserCard render");
  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '16px',
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
      border: '1px solid #e5e7eb',
      display: 'flex',
      alignItems: 'center',
      gap: '15px'
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: '#6366f1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.2rem'
      }}>
        {user.name.charAt(0)}
      </div>
      <div>
        <h3 style={{ margin: 0, color: '#111827', fontSize: '1.1rem' }}>{user.name}</h3>
        <p style={{ margin: 0, color: '#6b7280', fontSize: '0.9rem' }}>{user.email}</p>
      </div>
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