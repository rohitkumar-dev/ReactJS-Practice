import { useState } from 'react'
import './App.css'


function App() {
  const default_color = "grey"
  const [color,setcolor] = useState(default_color)

  return (
      <div className='w-full h-screen duration-500' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor: default_color}} onClick={()=>{setcolor(default_color)}}>Default</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor: "green"}} onClick={()=>setcolor("green")}>Green</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor: "pink"}} onClick={()=>{setcolor("pink")}}>Pink</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor: "purple"}} onClick={()=>{setcolor("purple")}}>Purple</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor: "orange"}} onClick={()=>{setcolor("orange")}}>Orange</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor: "black"}} onClick={()=>{setcolor("black")}}>Black</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-xl' style={{backgroundColor: "red"}} onClick={()=>{setcolor("red")}}>Red</button>
          </div>
        </div>
      </div>
  )
}

export default App
