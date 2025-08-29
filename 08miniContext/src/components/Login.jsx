import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext.js'


export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div className='bg-gray-700 rounded-2xl mx-auto p-5 max-w-sm flex flex-col' >
        <h2 className='mx-auto'>Login</h2>
        <input className='bg-gray-50 rounded-2xl text-black py-2 px-6 m-2' type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder='username'/>
        <input className='bg-gray-50 rounded-2xl text-black py-2 px-6 m-2' type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder='password'/>
        <button className='bg-blue-600 hover:bg-blue-500 active:bg-blue-600 rounded-2xl text-white font-bold py-2 px-6 m-2' onClick={handleSubmit}>Submit</button>
    </div>
  )
}
