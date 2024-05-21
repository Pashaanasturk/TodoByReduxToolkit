import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(), 
                text: action.payload
            }

            //adding a new todo into our TodoList
            state.todos.push(newTodo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },

        //Update functonaity will be here
        // updateTodo: (state, action) => {
        //     state.todos= state.todos.map((todo) =>
        //          {
        //             if(todo.id === action.payload.id)
        //                 {
        //                     action.text= state.text
        //                 }
        //          })
        // }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer