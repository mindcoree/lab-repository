import { memo } from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

// Обязательно оборачиваем в memo, иначе useCallback в родителе не будет иметь смысла
export const Button = memo(function Button({ onClick, label }: ButtonProps) {
  console.log(`Button "${label}" render`);
  return (
    <button onClick={onClick} style={{ margin: '5px', padding: '8px 16px' }}>
      {label}
    </button>
  );
});
