import React, { useState, useEffect } from 'react'

function titleUpdater() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Clicked ${count} times`;
    }, [count]);

    return (
        <div>
            <p>you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    );
}

export default useEffect1