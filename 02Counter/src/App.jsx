import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  //let counter = 5

  function increment(){
    console.log("increment clicked")
    if(counter<20){
      //counter+=1
      // setCounter(counter+1)
      // setCounter(counter+1)
      setCounter(counter+1)
    }
    console.log("now: ",counter)    
  }
  function decrement(){
    if(counter>0){
      setCounter(counter-1)
    }
    console.log("now: ",counter) // Prints the old value
  }

  return (
    <>
      <h2>This is counter project</h2>
      <h2>Counter Value: {counter}</h2>

      <button onClick={increment}>Increment Value</button>
      <br/>
      <button onClick={decrement}>Decrement Value</button>
    </>
  )
}

export default App

