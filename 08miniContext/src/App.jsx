import React from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'

function App() {

  return (
    <UserContextProvider>
      <div className='bg-gray-900 h-dvh text-white'>
        <h2 className='text-2xl text-center p-10 '>Hello, its context API practice</h2>
        <Login/>
        <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App
