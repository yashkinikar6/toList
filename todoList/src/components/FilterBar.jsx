import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const FilterBar = () => {
  const { filter, setFilter } = useContext(TodoContext)
  const filters = ['all', 'active', 'completed']

  return (
    <div className="flex justify-center space-x-4 p-2">
      {filters.map(f => (
        <button 
          key={f}
          onClick={() => setFilter(f)}
          className={`capitalize px-3 py-1 rounded transition ${filter === f ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
        >
          {f}
        </button>
      ))}
    </div>
  )
}

export default FilterBar
