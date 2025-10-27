import { useState } from 'react';
import './App.css';
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>React with Vite</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </div>
  );
}
export default App;