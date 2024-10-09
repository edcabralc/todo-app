import { TodoType } from "@/data/@types/todo.type";
import { todoReducer } from "@/reducers/todo.reducer";
import { useReducer, useEffect } from "react";

export const useTodos = () => {
  const [items, dispatch] = useReducer(todoReducer, []);

  const addTodo = (item: TodoType) => {
    const newTask = item;
    dispatch({ type: "add", payload: newTask });
  };

  const removeTodo = (id: string) =>
    dispatch({ type: "remove", payload: { id } });

  const markIsDone = (id: string) =>
    dispatch({ type: "done", payload: { id } });
  // const handleFilterAll = () => {
  //   setFilteredItems(items);
  // };
  // const handleFilterDone = () => {
  //   const doneItems = items.filter((item) => item.done);
  //   setFilteredItems(doneItems);
  // };
  // const handleFilterUndone = () => {
  //   const unDoneItems = items.filter((item) => !item.done);
  //   setFilteredItems(unDoneItems);
  // };

  // useEffect(() => {
  //   setFilteredItems(items);
  // }, [items]);

  return {
    items,
    addTodo,
    removeTodo,
    markIsDone,
  };
};
