import { useState } from 'react'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggesIn] = useState(null)

  return (
    <div style={{padding: "2px"}}>
      <h2>React Production Mistake</h2>
      <button onClick={()=> setIsLoggesIn(!isLoggedIn)}>Toggle Login</button>

      <div>
        <h2>&& operator</h2>
        {isLoggedIn && <p>Welcome to dashboard</p>}
      </div>
      <br />
      <div>
        <h2>Ternary operator</h2>
        {isLoggedIn ? <p>Welcome to dashboard</p> : <p>Please login</p>}
      </div>
    </div>
  )
}

export default App
