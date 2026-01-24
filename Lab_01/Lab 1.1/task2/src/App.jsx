import { useState } from 'react'
import './App.css'

function App() {
  const [isHighlighted, setIsHighlighted] = useState(false)

  return (
    <div className="container">
      <h1>React - Управление состоянием</h1>
      
      <button onClick={() => setIsHighlighted(!isHighlighted)}>
        Переключить подсветку
      </button>
      
      <p className={isHighlighted ? "highlight" : ""}>
        Это абзац текста, который подсвечивается через state React. 
        Никакого прямого управления DOM — только state и re-render!
      </p>
    </div>
  )
}

export default App
