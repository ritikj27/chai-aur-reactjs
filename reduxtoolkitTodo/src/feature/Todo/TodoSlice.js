import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
  isEditTodo: false,
  editTodoId: 1,
  updateTodoText: "",
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const obj = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(obj);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.isEditTodo = true;
      state.editTodoId = action.payload.id;
      state.updateTodoText = action.payload.text;
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.text = text;
      }
      state.isEditTodo = false;
      state.updateTodoText = "";
    },
  },
});

export const { addTodo, removeTodo, updateTodo, editTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
