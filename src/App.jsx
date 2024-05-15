import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from './todoSlice'
import "./index.css"

const App = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todoState.todos)
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      id: Math.random(),
      text: inputRef.current.value
    }
    dispatch(addTodo(newTodo))
    inputRef.current.value = ''
  }
  const handleDelete = (id) => {
    dispatch(removeTodo(id))
  }

  const checkInput = () => {
    if(!inputRef.current.value.trim()) {
      alert("Bo'shliq bo'sh qolgan")
    }
  }
  return (
    <div className='big__div'>
      <form onSubmit={handleSubmit}>
        <label>
          <span className='span'>Text:</span>
          <input className='inputref' type="text" ref={inputRef} />
        </label>
        <button onClick={checkInput} className='submit__button' type="submit">Add</button>
      </form>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <h4>{item.text}</h4>
            <button className='delete__button' onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
