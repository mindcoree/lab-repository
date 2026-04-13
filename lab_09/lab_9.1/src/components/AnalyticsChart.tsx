import { useMemo } from "react";

interface AnalyticsChartProps {
  items: string[];
}

function calculateAnalytics(items: string[]): number {
  console.log("Calculating analytics (heavy computation)...");
  let result = 0;
  for (let i = 0; i < 10000000; i++) {
    result += Math.sqrt(i);
  }
  return result + items.length;
}

export function AnalyticsChart({ items }: AnalyticsChartProps) {
  const analytics = useMemo(() => calculateAnalytics(items), [items]);
  
  return (
    <div style={{
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      borderRadius: '12px',
      padding: '24px',
      color: 'white',
      marginTop: '20px',
      boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#94a3b8' }}>
          Performance Analytics
        </h3>
        <span style={{ backgroundColor: '#22c55e', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>
          LIVE
        </span>
      </div>
      <div style={{ marginTop: '15px' }}>
        <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{analytics.toLocaleString()}</div>
        <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '5px' }}>
          Calculated from {items.length} data points
        </p>
      </div>
    </div>
  );
}