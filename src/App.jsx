import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>User Directory</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px", width: "250px" }}
      />

      <ul>
        {filteredUsers.map((user) => (
          <li
            key={user.id}
            onClick={() => setSelectedUser(user)}
            style={{
              cursor: "pointer",
              margin: "8px 0",
              borderBottom: "1px solid #ddd",
              paddingBottom: "4px",
            }}
          >
            <strong>{user.name}</strong> <br />
            <small>{user.email}</small>
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div style={{ marginTop: "20px" }}>
          <h3>User Details</h3>
          <p><b>Name:</b> {selectedUser.name}</p>
          <p><b>Email:</b> {selectedUser.email}</p>
          <p><b>Phone:</b> {selectedUser.phone}</p>
          <p>
            <b>Company:</b> {selectedUser.company.name}
          </p>
          <p>
            <b>Address:</b> {selectedUser.address.city},{" "}
            {selectedUser.address.street}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;