import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo.jsx'
import Todo from './components/Todo.jsx'

import { Provider } from 'react-redux'
import { store } from './app/store.js'

function App() {

  return (
    <Provider store={store}>
      <h1 className='p-3 bg-gray-700 text-white text-center text-xl'>Redux Toolkit Practice</h1>
      <AddTodo/>
      <Todo/>
    </Provider>
  )
}

export default App
