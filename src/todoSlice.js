import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todoState',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    toggleDone: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload)
      if (todo) {
        todo.done = !todo.done
      }
    }
  }
})

export const { addTodo, removeTodo, toggleDone } = todoSlice.actions
export default todoSlice.reducer
