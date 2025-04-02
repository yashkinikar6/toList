import React, { useContext } from 'react'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import FilterBar from './components/FilterBar'
import TodoList from './components/TodoList'
import { TodoContext } from './context/TodoContext'

function App() {
  const { theme } = useContext(TodoContext)

  return (
    <div className={`min-h-screen p-4 transition-colors duration-500 ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}`}>
      <div className="container mx-auto max-w-2xl shadow-lg rounded-lg overflow-hidden">
        <Header />
        <TodoForm />
        <FilterBar />
        <TodoList />
      </div>
    </div>
  )
}

export default App
