import React from 'react';
import ArticleManager from './components/ArticleManager';
import AddArticle from './components/AddArticle';
import ArticleList from './components/ArticleList';

function App() {
  return (
    <div className="App">
      <ArticleManager 
        // Передаем функции отрисовки (Render Props Pattern)
        renderAddArticle={(props) => <AddArticle {...props} />}
        renderArticleList={(props) => <ArticleList {...props} />}
      />
    </div>
  );
}

export default App;

