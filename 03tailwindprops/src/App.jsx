import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {

  let myobj = { name: "Rama", age: 20}
  let myarr = [10,20,30,40,50]
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 max-w-2xl">
      <h2 className="text-red-300 p-5 rounded-xl text-center">
        Testing tailwind css
      </h2>

      <Card username="Shyam" obj={myobj}/>
      <Card username="Shyam" title="India" />
    </div>
  )
}

export default App
