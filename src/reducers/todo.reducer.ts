import { TodoType } from "@/data/@types/todo.type";
import { Reducer } from "react";

type AddTodo = { type: "add"; payload: TodoType };
type RemoveTodo = { type: "remove"; payload: { id: string } };
type EditTodo = { type: "edit"; payload: { id: string; description: string } };
type DoneTodo = { type: "done"; payload: { id: string } };
type LoadTodo = { type: "load"; payload: TodoType[] };

type TodoReducerType = AddTodo | RemoveTodo | EditTodo | DoneTodo | LoadTodo;

export const todoReducer: Reducer<TodoType[], TodoReducerType> = (
  state,
  action
) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: action.payload.id,
          description: action.payload.description,
          done: action.payload.done,
        },
      ];

    case "remove":
      return state.filter((item) => item.id !== action.payload.id);

    case "edit":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, description: action.payload.description }
          : item
      );

    case "done":
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, done: !item.done } : item
      );

    case "load":
      return action.payload;

    default:
      return state;
  }
};
