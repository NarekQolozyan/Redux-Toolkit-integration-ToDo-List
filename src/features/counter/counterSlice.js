import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState:[],
  reducers: {
    addText: (state,action) => {
      state.push(action.payload)
    },
    removeTodo: (state, action) => {
    
      return state.filter(el => el.id !== action.payload);
    
    },
    deleteAllTodos: (state,action) => {
      return state = []
    },
    editTodo: (state,action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      state[index].name = action.payload.name;
    }
  },  
});

export const { addText, removeTodo, deleteAllTodos, editTodo } = counterSlice.actions;

export default counterSlice.reducer;
