import { useState } from 'react'
import './App.css'
import { VirtualList } from './components/VirtualList';
import { RegularList } from './components/RegularList';

function App() {
  const [useVirtual, setUseVirtual] = useState(true);

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Lab 9.2: List Virtualization</h1>
      
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        <button 
          onClick={() => setUseVirtual(!useVirtual)}
          style={{
            padding: '12px 24px',
            fontSize: '1rem',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: useVirtual ? '#ef4444' : '#22c55e',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
          }}
        >
          Switch to {useVirtual ? 'Regular List (Warning: Heavy!)' : 'Virtual List (Optimized)'}
        </button>
      </div>

      {useVirtual ? <VirtualList /> : <RegularList />}
    </div>
  );
}

export default App;