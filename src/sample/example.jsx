import React from 'react'

function App() {
    return <Greeting name="kalum" age={21} />;
}

function Greeting(props) {
    return (
        <h2>
            Hello {props.name}, you are {props.age} years old!
        </h2>
    );
}

export default example