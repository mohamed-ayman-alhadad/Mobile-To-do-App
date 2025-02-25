import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos:  [],
    done: false,
    filteredTodos:[]
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      state.filteredTodos = state.todos;
    },
    isChecked: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      );
      state.filteredTodos = state.todos;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.filteredTodos = state.todos;
    },
    fileration: (state, action) => {
        if(action.payload === 'all'){
            state.filteredTodos = state.todos
        }else if(action.payload === 'done'){
           state.filteredTodos = state.todos.filter((todo) => todo.done === true)

        }else{
           state.filteredTodos = state.todos.filter((todo) => todo.done === false)
            
        }
        
    },
  },
});
export const { addTodo,  isChecked , deleteTodo , fileration} = todoSlice.actions;
export default todoSlice;
