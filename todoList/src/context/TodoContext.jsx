import React, { createContext, useState, useEffect } from 'react'

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })

  const [theme, setTheme] = useState('light')
  const [filter, setFilter] = useState('all') // "all", "active", "completed"

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo) => {
    setTodos(prev => [...prev, todo])
  }

  const updateTodo = (updatedTodo) => {
    setTodos(prev => prev.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo))
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const value = {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    theme,
    toggleTheme,
    filter,
    setFilter,
  }

  return (
    <TodoContext.Provider value={value}>
      <div className={theme === 'light' ? 'bg-gray-100 text-gray-800' : 'bg-gray-900 text-gray-100'} >
        {children}
      </div>
    </TodoContext.Provider>
  )
}
