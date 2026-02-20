import React from 'react';

// Компонент, который не создает лишних <div> в браузере
const FragmentLayout = () => {
  return (
    <React.Fragment>
      <header>
        <h1>Fragment Layout</h1>
      </header>
      <main>
        <p>This is the main content without a wrapper div.</p>
      </main>
      <footer>
        <p>&copy; 2026 Lab Work</p>
      </footer>
    </React.Fragment>
  );
};

export default FragmentLayout;