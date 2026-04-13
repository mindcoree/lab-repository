import { useState, useCallback } from "react";
import { UserCard, UserCardWithCompare } from "./UserCard";
import { AnalyticsChart } from "./AnalyticsChart";
import { ActivityFeed } from "./ActivityFeed";
import { Button } from "./Button";

interface User {
  id: number;
  name: string;
  email: string;
}

export function Dashboard() {
  const [count, setCount] = useState(0);
  const [user] = useState<User>({
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  });
  const [items] = useState(["item1", "item2", "item3"]);

  console.log("--- Dashboard Render ---");

  // Стабильная ссылка на функцию благодаря useCallback
  const handleIncrement = useCallback(() => {
    setCount((c) => c + 1);
  }, []); // Пустой массив зависимостей, так как мы используем callback внутри setCount

  const handleClick = useCallback(() => {
    console.log("Action button clicked");
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f8fafc', 
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <header style={{ marginBottom: '30px' }}>
          <h1 style={{ color: '#0f172a', fontSize: '2rem', margin: '0 0 8px 0' }}>Data Lab Dashboard</h1>
          <p style={{ color: '#64748b', margin: 0 }}>Performance Optimization Lab 9.1</p>
        </header>
        
        <div style={{ 
          backgroundColor: '#fff', 
          borderRadius: '12px', 
          padding: '24px', 
          marginBottom: '24px',
          border: '1px solid #e2e8f0' 
        }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '16px' }}>Controls</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#6366f1' }}>{count}</div>
            <Button onClick={handleIncrement} label="Increment Count" />
            <Button onClick={handleClick} label="Action Log" />
          </div>
        </div>

        <UserCard user={user} />
        <AnalyticsChart items={items} />
        
        <div style={{ marginTop: '20px' }}>
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}

