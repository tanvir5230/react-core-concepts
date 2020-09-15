import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  function increase() {
    setCount(count + 1);
  }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  });
  return (
    <div className="App">
      <p>count: {count}</p>
      <button
        style={{
          padding: "10px",
          cursor: "pointer",
          border: "none",
          outline: "none",
        }}
        onClick={increase}
      >
        +
      </button>
      <ul>
        {users.length === 0 && <p>loading...</p>}
        {users.length > 0 &&
          users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
      </ul>
    </div>
  );
}

export default App;
