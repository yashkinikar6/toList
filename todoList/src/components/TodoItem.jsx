import React, { useState, useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const TodoItem = ({ todo }) => {
  const { updateTodo, deleteTodo } = useContext(TodoContext)
  const [isEditing, setIsEditing] = useState(false)
  const [newText, setNewText] = useState(todo.text)

  const handleToggle = () => {
    updateTodo({ ...todo, completed: !todo.completed })
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    updateTodo({ ...todo, text: newText })
    setIsEditing(false)
  }

  return (
    <li className="p-4 flex items-center justify-between transition transform hover:scale-105">
      <div className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={handleToggle} 
          className="h-5 w-5"
        />
        {isEditing ? (
          <input 
            type="text" 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)}
            className="p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        ) : (
          <span className={`text-lg ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex space-x-2">
        {isEditing ? (
          <button 
            onClick={handleSave} 
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Save
          </button>
        ) : (
          <button 
            onClick={handleEdit} 
            className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
          >
            Edit
          </button>
        )}
        <button 
          onClick={() => deleteTodo(todo.id)}
          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
