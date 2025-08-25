import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(true)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("1234569999")
  const [btnValue, setBtnValue] = useState("Copy")
  //ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback( ()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWZYXabcdefghijklmnopqrstuvwzyx"
    if(numAllowed){
      str += "1234567890"
    }
    if(charAllowed){
      str += "!@#$%&*()_+{}[]/*-"
    }
    for(let i=0;i<length;i++){
      let char =  Math.floor(Math.random() * str.length)
      pass += str[char]
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed])


  const copyPassword = useCallback(async ()=>{
    try {
      passwordRef.current?.select()
      await navigator.clipboard.writeText(password)
      setBtnValue("Copied")
    } catch (error) {
      console.log("Error in copy:-", error)
    }
    
  }, [password])

  useEffect(()=>{
    passwordGenerator()
    setBtnValue("Copy")
  },[passwordGenerator])

  return (
  <div className="text-white flex flex-col gap-3 justify-center items-center w-full h-screen px-10 m-0">
    <div className=" max-w-lg flex flex-col gap-3 bg-slate-500 p-5 rounded-3xl">
      <div className="bg-slate-700 rounded-3xl p-5">
        <h1 className="text-xl font-bold text-center">Random<br/>Password Generator</h1>
      </div>
      <div className="bg-slate-700 rounded-3xl p-5 text-sm">
        <div className='flex  text-black rounded-xl overflow-hidden'>
          <input type="text" value={password} className='outline-none w-full py-3 px-3 bg-slate-50 font-medium' placeholder='password' readOnly ref={passwordRef}/>
          <button className='bg-slate-500 text-white font-medium px-3 outline-none w-20' onClick={copyPassword}>{btnValue}</button>
        </div>

        <div className="flex justify-between items-center bg-slate-500 p-3   rounded-3xl mt-4">
          <label className="font-medium">Length: {length}</label>
          <input
            type="range"
            min={4}
            max={20}
            value={length}
            className="cursor-pointer w-40"
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>

        <div className="flex justify-between items-center bg-slate-500 p-3   rounded-3xl mt-4">
          <label className="font-medium">Numbers</label>
          <input
            type="checkbox"
            checked={numAllowed}
            className="cursor-pointer w-5 h-5 accent-slate-300"
            onChange={() => setNumAllowed(!numAllowed)}
          />
        </div>

        <div className="flex justify-between items-center bg-slate-500 p-3   rounded-3xl mt-4">
          <label className="font-medium">Characters</label>
          <input
            type="checkbox"
            checked={charAllowed}
            className="cursor-pointer w-5 h-5 accent-slate-300"
            onChange={() => setCharAllowed(!charAllowed)}
          />
        </div>

      </div>
    </div>
  </div>
)

}

export default App

