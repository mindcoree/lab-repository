import { useState, useMemo, useCallback } from "react";
import { List } from "react-window";
import type { RowComponentProps } from "react-window";
import { generateItems } from "../utils/generateItems";
import type { Item } from "../utils/generateItems";

interface VirtualListProps {
  itemCount?: number;
  height?: number;
}

// 1. ВЫНОСИМ ROW НАРУЖУ И ОБОРАЧИВАЕМ В MEMO
// Указываем тип передаваемых данных (Item[]) через дженерик ListChildComponentProps
const Row = ({ index, style, items }: RowComponentProps<{ items: Item[] }>) => {
  // Получаем конкретный элемент из массива data
  const item = items[index];
  
  return (
    // 2. Объект style от react-window применяем строго к внешнему контейнеру без изменений!
    <div style={style}>
      {/* 3. Всю визуальную часть, отступы (margin) и рамки делаем во внутреннем div */}
      <div style={{
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '16px',
        margin: '0 10px 10px 10px', // Нижний отступ между карточками
        height: 'calc(100% - 10px)', // Вычитаем margin, чтобы карточка поместилась
        boxSizing: 'border-box',
        border: '1px solid #e2e8f0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h4 style={{ margin: 0, color: '#0f172a' }}>{item.title}</h4>
          <span style={{ 
            backgroundColor: '#e0e7ff', color: '#4f46e5', 
            padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' 
          }}>
            {item.category}
          </span>
        </div>
        <p style={{ margin: '8px 0 0 0', fontSize: '0.875rem', color: '#64748b' }}>
          {item.description}
        </p>
      </div>
    </div>
  );
};

export function VirtualList({ itemCount = 10000, height = 500 }: VirtualListProps) {
  const [filter, setFilter] = useState("");

  const items = useMemo(() => generateItems(itemCount), [itemCount]);

  const filteredItems = useMemo(() => {
    if (!filter) return items;
    return items.filter(item =>
      item.title.toLowerCase().includes(filter.toLowerCase()) ||
      item.category.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }, []);

  return (
    <div style={{ backgroundColor: '#f8fafc', padding: '24px', borderRadius: '12px' }}>
      <h2 style={{ marginTop: 0 }}>Virtualized List (Fast ⚡)</h2>
      
      <input
        type="text"
        placeholder="Filter items by title or category..."
        value={filter}
        onChange={handleFilterChange}
        style={{
          width: '100%', padding: '12px', marginBottom: '16px',
          borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem',
          boxSizing: 'border-box'
        }}
      />
      
      <div style={{ marginBottom: '12px', fontSize: '0.9rem', color: '#64748b', fontWeight: 'bold' }}>
        Showing {filteredItems.length} of {items.length} items
      </div>

      <List
        rowCount={filteredItems.length}
        rowHeight={110} // Размер строки (100px высота карточки + 10px отступ)
        rowComponent={Row}
        rowProps={{ items: filteredItems }} // 4. ПЕРЕДАЕМ ДАННЫЕ ЧЕРЕЗ rowProps
        style={{ height, width: "100%" }}
      >
      </List>
    </div>
  );
}