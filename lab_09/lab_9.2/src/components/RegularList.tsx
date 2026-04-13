import { useMemo } from "react";
import { generateItems } from "../utils/generateItems";

export function RegularList({ itemCount = 10000 }: { itemCount?: number }) {
  const items = useMemo(() => generateItems(itemCount), [itemCount]);

  return (
    <div style={{ backgroundColor: '#fef2f2', padding: '24px', borderRadius: '12px' }}>
      <h2 style={{ marginTop: 0, color: '#991b1b' }}>Regular List (Slow 🐢)</h2>
      <div style={{ marginBottom: '12px', fontSize: '0.9rem', color: '#991b1b' }}>
        Rendering all {items.length} items directly to DOM...
      </div>
      
      <div style={{ height: '500px', overflowY: 'auto' }}>
        {items.map(item => (
          <div key={item.id} style={{
            backgroundColor: '#fff', borderRadius: '8px', padding: '16px',
            marginBottom: '10px', border: '1px solid #fca5a5'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h4 style={{ margin: 0 }}>{item.title}</h4>
              <span>{item.category}</span>
            </div>
            <p style={{ margin: '8px 0 0 0', fontSize: '0.875rem' }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
