import React from 'react'

function greeting(props) {
    return <div>Welcome to the User Directory</div>
}

<greeting name="Kalum" />

const Greeting = ({ name }) => {
    return <h2>Hello, {name}</h2>
}

export default greeting