import { useState, useEffect } from 'react';
import axios from 'axios';

// import { createServer } from "miragejs"

// createServer({
//   routes() {
//     this.get("https://jsonplaceholder.typicode.com/users", () => [
//       { id: "1", name: "User 01" },
//       { id: "2", name: "User 02" },
//       { id: "3", name: "User 03" },
//     ])
//   },
// })

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    // axios.get('/users')
      .then(response => {
        setUsers(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default App
