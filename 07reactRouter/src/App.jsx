import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='bg-red-500  m-10'>Hello React Router</h2>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
