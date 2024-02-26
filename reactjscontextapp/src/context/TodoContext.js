import React, { useContext } from "react";

export const TodoContext = React.createContext({
    todos:[
        {
            id:Date.now(),
            todo:"hello world",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{}
})

export const TodoProvider = TodoContext.Provider;

export const useTodo = () =>{
    return useContext(TodoContext)
}
