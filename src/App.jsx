import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo, toggleDone } from './todoSlice'
import "./index.css"

const App = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todoState.todos)
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputRef.current.value.trim()) {
      alert("Bo'shliq bo'sh qolgan")
      return
    }
    const newTodo = {
      id: Math.random(),
      text: inputRef.current.value,
      done: false
    }
    dispatch(addTodo(newTodo))
    inputRef.current.value = ''
  }

  const handleDelete = (id) => {
    dispatch(removeTodo(id))
  }

  const handleToggleDone = (id) => {
    dispatch(toggleDone(id))
  }

  return (
    <div className='big__div'>
      <form onSubmit={handleSubmit}>
        <label className='label'>
          <span className='span'>Text:</span>
          <input className='inputref' type="text" ref={inputRef} placeholder='Biror soz kiriting' />
        </label>
        <button className='submit__button' type="submit">Add</button>
      </form>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <h4 className={item.done ? 'done' : ''}>{item.text}</h4>
            <button className='done__button' onClick={() => handleToggleDone(item.id)}>
              {item.done ? 'Undo' : 'Done'}
            </button>
            <button className='delete__button' onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
