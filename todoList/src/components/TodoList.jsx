import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import TodoItem from './TodoItem'

const TodoList = () => {
  const { todos, filter } = useContext(TodoContext)

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <ul className="divide-y divide-gray-300">
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      {filteredTodos.length === 0 && (
        <li className="p-4 text-center text-gray-500">No tasks found</li>
      )}
    </ul>
  )
}

export default TodoList
