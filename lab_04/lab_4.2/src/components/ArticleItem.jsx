import React, { useState } from 'react';

const ArticleItem = ({ article, onClickRemove }) => {
  // Локальное состояние для управления показом текста (Task 3.2)
  const [isOpened, setIsOpened] = useState(false);

  const onClickToggle = (e) => {
    e.preventDefault();
    setIsOpened(!isOpened);
  };

  return (
    <li style={{ marginBottom: '10px' }}>
      <a 
        href={`#${article.id}`} 
        title="Toggle Summary" 
        onClick={onClickToggle}
        style={{ marginRight: '10px', fontWeight: 'bold', cursor: 'pointer' }}
      >
        {article.title}
      </a>
      <button onClick={() => onClickRemove(article.id)}>×</button>
      
      {/* Отображение зависит от локального состояния */}
      <p style={{ display: isOpened ? 'block' : 'none', color: '#555' }}>
        {article.summary}
      </p>
    </li>
  );
};

export default ArticleItem;
