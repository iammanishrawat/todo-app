import React, { useState } from 'react'
import './assets/css/style.css'

export default function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const handlerChange = (e) => {
    setTodo(e.target.value)
  }
  const handlerAdd = (e) => {
    e.preventDefault()
    if (todo.trim() === '') {
      alert('Please enter a todo item.')
      return
    }
    setTodos([...todos, todo]) // Create a new array with the existing and new todo
    setTodo('') // Clear the input field after adding
  }
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="name">Items Name</label>
          <input type="text" id="name" value={todo} onChange={handlerChange} />
        </div>
        <button className="btn" onClick={handlerAdd}>
          Save
        </button>
      </form>

      {/* todo list heading */}
      <h1 className="header">Todo List</h1>
      {/* todo list heading */}

      {/* todo list area where lists will come */}
      <ul className="todos">
        {todos.map((item, index) => {
          return (
            <li key={index} className="todo">
              <label>
                <input type="checkbox" />
                {item}
              </label>
              <button className="btn">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </li>
          )
        })}
      </ul>
      {/* todo list area where lists will come */}
    </>
  )
}
