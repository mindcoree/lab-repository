import React, { useState } from 'react';

const ArticleManager = ({ renderAddArticle, renderArticleList }) => {
  // Глобальное состояние для списка статей и полей ввода
  const [articles, setArticles] = useState([
    { id: 1, title: 'First Article', summary: 'This is a summary of the first article.' }
  ]);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');

  // Логика добавления
  const onClickAdd = () => {
    if (!title || !summary) return;
    const newArticle = {
      id: Date.now(), // Простой генератор ID
      title,
      summary
    };
    setArticles([...articles, newArticle]);
    setTitle(''); // Очистка полей
    setSummary('');
  };

  // Логика удаления
  const onClickRemove = (id) => {
    setArticles(articles.filter(article => article.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Используем Render Props для AddArticle */}
      {renderAddArticle({
        name: 'Articles Manager',
        title,
        summary,
        onChangeTitle: (e) => setTitle(e.target.value),
        onChangeSummary: (e) => setSummary(e.target.value),
        onClickAdd
      })}

      {/* Используем Render Props для ArticleList */}
      {renderArticleList({
        articles,
        onClickRemove
      })}
    </div>
  );
};

export default ArticleManager;
