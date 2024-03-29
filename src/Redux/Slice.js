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
          const todoInCompleteedList = state.completed.find(res=>res.title===action.payload.title);
          //add todo if not existed in completed list
          if(!todoInCompleteedList)
          {
            state.completed=[...state.completed, action.payload];
            //remove from progress list
            const todoInProgressList = state.inProgress.find(res=>res.title===action.payload.title);
            let index= state.inProgress.indexOf(todoInProgressList);
            state.inProgress.splice(index,1); 
          }
        },
        deletaTodo: (state, action)=>{
            //remove from todos list
            const todoInTodosList = state.todos.find(res=>res.title===action.payload.title);
            let todosIndex= state.todos.indexOf(todoInTodosList);
            state.todos.splice(todosIndex,1);
            //remove from progress list
            const todoInProgressList = state.inProgress.find(res=>res.title===action.payload.title);
            if(todoInProgressList)
            {
              let progressIndex= state.inProgress.indexOf(todoInProgressList);
              state.inProgress.splice(progressIndex,1); 
            }
        },
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

export const {addTodo, completeTask, deletaTodo} = todoSlice.actions; 
export default todoSlice;