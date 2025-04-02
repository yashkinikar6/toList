import React, { useState, useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { v4 as uuidv4 } from 'uuid'

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext)
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim() === '') return
    addTodo({
      id: uuidv4(),
      text,
      completed: false,
      priority: 'normal',  // default value
    })
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 flex items-center space-x-2">
      <input 
        type="text" 
        placeholder="Add new task..." 
        className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button 
        type="submit" 
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm
