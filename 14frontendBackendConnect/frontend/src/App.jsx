import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>setJokes(response.data))
    .catch((error)=>console.log(error))
  }, [])

  return (
    <>
      <h2>Jokes</h2>
      <p>Number of Jokes: {jokes.length}</p>
      {
        jokes.map((joke, index)=> (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.joke}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
