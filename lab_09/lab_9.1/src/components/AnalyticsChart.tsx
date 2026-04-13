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
  // Кешируем результат вычислений. Функция запустится снова ТОЛЬКО если изменится массив items.
  const analytics = useMemo(() => calculateAnalytics(items), [items]);
  
  console.log("AnalyticsChart render");
  
  return (
    <div style={{ background: '#f5f5f5', padding: '15px', marginTop: '10px' }}>
      <h3>Analytics Chart</h3>
      <p>Calculated value: {analytics.toFixed(2)}</p>
      <p>Items processed: {items.length}</p>
    </div>
  );
}
