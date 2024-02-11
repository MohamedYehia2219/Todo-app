import { createSlice } from "@reduxjs/toolkit";

const todoSlice= createSlice({
    name:'todo-slice',
    initialState:{
        todos: [],
        completed:[],
        inProgress:[]
    },
    reducers:{
        addTodo: (state,action)=>{
            if(action.payload.title && action.payload.description && check(state,action))
            {  
                state.todos=[...state.todos, action.payload];
                state.inProgress=[...state.inProgress, action.payload];
            }
        },
        completeTask: (state,action)=>{
          const todo = state.completed.find(res=>res.title===action.payload.title);
          if(!todo)
          {
            state.completed=[...state.completed, action.payload];
          }
        }
    }
})

const check=(state , action)=>{
    for(let todo of state.todos)
    {
      if(todo.title===action.payload.title)
      {
        alert("Task is already existed!!..");
        return false;
      }
    }
    return true;
  }

export const {addTodo, completeTask} = todoSlice.actions; 
export default todoSlice;