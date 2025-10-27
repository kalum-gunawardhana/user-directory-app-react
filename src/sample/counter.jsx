import { useState } from 'react'

function counter() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default counter