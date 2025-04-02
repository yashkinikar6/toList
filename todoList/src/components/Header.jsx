import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const Header = () => {
  const { toggleTheme, theme } = useContext(TodoContext)

  return (
    <header className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <h1 className="text-2xl font-bold">Advanced Todo App</h1>
      <button 
        onClick={toggleTheme}
        className="px-3 py-1 rounded bg-blue-700 hover:bg-blue-800 transition"
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  )
}

export default Header
