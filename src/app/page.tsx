"use client";

import { useState } from "react";

import { TodoType } from "@/data/@types/todo.type";

import { Trash2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/footer";
import { TodoItem } from "@/components/todo-item";
import { EmptyAlert } from "@/components/empty-alert";
import { Todo } from "@/components/todo";
import { AddTodo } from "@/components/add-todo";

const Home = () => {
  const [items, setItems] = useState<TodoType[]>([]);
  const [description, setDescription] = useState<string>("");
  const [isDone, setIsDone] = useState<boolean>(false);

  const totalItemsTodo = items.length;

  const handleCleanerDescription = () => {
    setDescription("");
  };

  const handleAddTodoItems = (item: TodoType) => {
    setItems((items): TodoType[] => [...items, item]);
  };

  const handleDeleteTodo = (id: number) => {
    setItems((items: TodoType[]) =>
      items.filter((item: TodoType) => item.id !== id)
    );
  };

  const handleUpdateTodo = (id: number) => {
    setItems((items: TodoType[]) =>
      items.map((item: TodoType) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-6 gap-4 bg-gradient-to-b from-sky-400 to-indigo-700">
      <h1 className="text-4xl font-extrabold">TODO.App</h1>
      <Card className="w-full flex flex-col space-y-8 md:w-[670px] p-6 bg-slate-100">
        <div className="flex gap-4 items-center">
          <div className="w-full flex gap-2">
            <AddTodo
              onSubmitTodo={handleAddTodoItems}
              clearDescription={handleCleanerDescription}
            />
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
              <TodoItem item={item} action={handleUpdateTodo} key={item.id}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="p-2 rounded-full"
                  onClick={() => handleDeleteTodo(item.id)}
                >
                  <Trash2Icon className="size-4" />
                </Button>
              </TodoItem>
            ))}
          </>
        </Todo>
        {totalItemsTodo <= 0 ? null : <Footer total={totalItemsTodo} />}
      </Card>
    </main>
  );
};

export default Home;
