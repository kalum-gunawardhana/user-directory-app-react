import React, { useState } from 'react'

function UserCard({ name }) {
    const [likes, setLikes] = useState(0);

    return (
        <div>
            <h3 style={{ border: '1px solid #css', padding: '10px', width: '200px' }}>{name}</h3>
            <p>Likes: {likes}</p>
            <button onClick={() => setLikes(likes + 1)}>Like</button>
        </div>
    );
}


export default function App() {
    return (
        <div>
            <UserCard name={"Kalum"} />
            <UserCard name={"Himashi"} />
        </div>
    );
}