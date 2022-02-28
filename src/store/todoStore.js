import create from "zustand";
import produce from "immer";
import { v4 as uuidv4 } from 'uuid';

export const useStore = create((set) => ({
  todoList: [
    {
      id: uuidv4(),
      name: "Get stuff",
      isDone: false,
      date: new Date(),
    },
  ],
  addTodo: (payload) =>
    set(
      produce((draft) => {
        draft.todoList.push({
          id: uuidv4(),
          name: payload,
          isDone: false,
          date: new Date(),
        });
      })
    ),
  setDoneTodo: (payload) =>
    set(
      produce((draft) => {
        const todoIndex = draft.todoList.findIndex((el) => el.id === payload);
        draft.todoList[todoIndex].isDone = !draft.todoList[todoIndex].isDone;
      })
    ),
  setNameTodo: ({ id, name }) =>
    set(
      produce((draft) => {
        const todoIndex = draft.todoList.findIndex((el) => el.id === id);
        draft.todoList[todoIndex].name = name;
      })
    ),
  removeTodo: (payload) =>
    set(
      produce((draft) => {
        const todoIndex = draft.todoList.findIndex((el) => el.id === payload);
        draft.todoList.splice(todoIndex, 1);
      })
    ),
  // More mutations will go here
}));