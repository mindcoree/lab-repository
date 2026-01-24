import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="counter">
      <h2>Counter Component</h2>
      <div className="counter-display">
        <span className="counter-value">{count}</span>
      </div>
      <div className="counter-buttons">
        <button onClick={decrement} className="btn-decrement">
          Decrement
        </button>
        <button onClick={increment} className="btn-increment">
          Increment
        </button>
      </div>
    </div>
  )
}

export default Counter
