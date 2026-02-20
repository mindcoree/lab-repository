import React from 'react';
import './App.css';
import Section from './components/Section';
import ProductList from './components/ProductList';

function App() {
  return (
    <main>
      <Section title="Products">
        <ProductList />
      </Section>
    </main>
  );
}

export default App;
