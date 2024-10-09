import { TodoType } from "@/data/@types/todo.type";
import { useState } from "react";

export const useFilter = () => {
  const [filter, setFilter] = useState("all");

  const applyFilter = (items: TodoType[]) => {
    switch (filter) {
      case "done":
        return items.filter((item) => item.done);

      case "undone":
        return items.filter((item) => !item.done);

      default:
        return items;
    }
  };

  return { filter, applyFilter, setFilter };
};
