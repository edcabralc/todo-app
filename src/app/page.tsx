"use client";

import { useReducer } from "react";

import { TodoType } from "@/data/@types/todo.type";

import { Card } from "@/components/ui/card";
import { Footer } from "@/components/footer";
import { TodoItem } from "@/components/todo-item";
import { EmptyAlert } from "@/components/empty-alert";
import { Todo } from "@/components/todo";
import { AddTodo } from "@/components/add-todo";
import { todoReducer } from "@/reducers/todo.reducer";

const Home = () => {
  const [items, dispatch] = useReducer(todoReducer, []);

  const totalItemsTodo = items.length;

  const handleAddTodoItems = (item: TodoType) => {
    const newTask = item;
    dispatch({ type: "add", payload: newTask });
  };

  const handleDeleteTodo = (id: string) => {
    dispatch({ type: "remove", payload: { id } });
  };

  const handleDoneTodo = (id: string) => {
    dispatch({ type: "done", payload: { id } });
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-6 gap-4 bg-gradient-to-b from-sky-400 to-indigo-700">
      <h1 className="text-4xl font-extrabold">TODO.App</h1>
      <Card className="w-full flex flex-col space-y-8 md:w-[670px] p-6 bg-slate-100">
        <div className="flex gap-4 items-center">
          <div className="w-full flex gap-2">
            <AddTodo onAddTodo={handleAddTodoItems} />
          </div>
        </div>
        <Todo>
          <>
            {items.length <= 0 && (
              <EmptyAlert>
                Você ainda não tem nenhuma tarefa. Adicione alguma tarefa 🚀.
              </EmptyAlert>
            )}

            {items.map((item: any) => (
              <TodoItem
                key={item.id}
                item={item}
                onDelete={handleDeleteTodo}
                onDone={handleDoneTodo}
              />
            ))}
          </>
        </Todo>
        {totalItemsTodo <= 0 ? null : <Footer total={totalItemsTodo} />}
      </Card>
    </main>
  );
};

export default Home;
