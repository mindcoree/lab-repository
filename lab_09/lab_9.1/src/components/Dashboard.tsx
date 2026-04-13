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
    <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Dashboard</h1>
      
      <div style={{ background: '#e0f7fa', padding: '15px', marginBottom: '20px' }}>
        <h2>Parent State Updates</h2>
        <p>Count: {count}</p>
        <Button onClick={handleIncrement} label="Increment Count" />
        <Button onClick={handleClick} label="Log Action" />
      </div>

      <UserCard user={user} />
      <UserCardWithCompare user={user} />
      <AnalyticsChart items={items} />
      <ActivityFeed />
    </div>
  );
}

