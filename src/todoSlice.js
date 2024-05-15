// todoSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: []
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    changeStateTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id)
      if (todo) {
        todo.completed = action.payload.completed
      }
    }
  }
})

export const { addTodo, removeTodo, changeStateTodo } = todoSlice.actions
export default todoSlice.reducer