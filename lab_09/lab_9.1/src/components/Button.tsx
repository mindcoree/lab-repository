import { memo } from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

// Обязательно оборачиваем в memo, иначе useCallback в родителе не будет иметь смысла
export const Button = memo(function Button({ onClick, label }: ButtonProps) {
  console.log(`Button "${label}" render`);
  return (
    <button 
      onClick={onClick} 
      style={{
        padding: '10px 20px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: label.includes('Increment') ? '#6366f1' : '#f3f4f6',
        color: label.includes('Increment') ? 'white' : '#374151',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s',
        marginRight: '10px',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
      }}
      onMouseOver={(e) => (e.currentTarget.style.opacity = '0.8')}
      onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
    >
      {label}
    </button>
  );
});

