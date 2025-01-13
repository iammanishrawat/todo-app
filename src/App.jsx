import React, { useState } from 'react'
import './assets/css/style.css'

export default function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const handleAdd = (e) => {
    e.preventDefault()
    setTodos([...todos, { todo, isComplete: false }])
    setTodo('')
  }
  const handleEdit = () => {}
  const handleDelete = () => {}
  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="name">Items Name</label>
          <input type="text" id="name" value={todo} onChange={handleChange} />
        </div>
        <button className="btn" onClick={handleAdd}>
          Add a Todo
        </button>
      </form>

      <h1 className="header">Todo List</h1>
      <ul className="todos">
        {todos.map((item) => (
          <li className="todo">
            <label>
              <input type="checkbox" />
              {item.todo}
            </label>
            <button className="btn" onClick={handleEdit}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
