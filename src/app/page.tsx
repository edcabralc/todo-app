"use client";

import { useState } from "react";

import { Todo as TodoItem } from "@/data/@types/todo.type";

import { PlusIcon, Trash2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Footer } from "@/components/Footer";
import { Todo } from "@/components/Todo";
import { EmptyAlert } from "@/components/EmptyAlert";

export default function Home() {
  const [items, setItems] = useState<TodoItem[]>([]);
  const [description, setDescription] = useState<string>("");
  const [isDone, setIsDone] = useState<boolean>(false);

  const totalItemsTodo = items.length;

  const handleOnSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newTodo: TodoItem = { description, done: false, id: Date.now() };
    console.log(newTodo);
    handleAddTodoItems(newTodo);
    setDescription("");
  };

  const handleAddTodoItems = (item: TodoItem) => {
    setItems((items): TodoItem[] => [...items, item]);
  };

  const handleDeleteTodo = (id: number) => {
    setItems((items: TodoItem[]) =>
      items.filter((item: TodoItem) => item.id !== id)
    );
  };

  const handleUpdateTodo = (id: number) => {
    setItems((items: TodoItem[]) =>
      items.map((item: TodoItem) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
    console.log(items);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-6 gap-4 bg-gradient-to-b from-sky-400 to-indigo-700">
      <h1 className="text-4xl font-extrabold">TODO.App</h1>
      <Card className="w-full flex flex-col space-y-8 md:w-[670px] p-6 bg-slate-100">
        <div className="flex gap-4 items-center">
          <div className="w-full flex gap-2">
            <Card className="w-full flex flex-col gap-4 p-4 items-center sm:flex-row focus-within:ring focus-visible:ring-offset-1 focus-within:ring-black">
              <div className="w-full flex flex-col gap-2 relative">
                <form id="form-todo">
                  <Input
                    type="text"
                    name="addTodo"
                    className="w-full p-0 border-transparent focus:outline-none focus:rounded-none focus:border-none focus-visible:ring-0"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    placeholder="Adicionar tarefa"
                  />
                </form>
              </div>
              <Button
                id="form-todo"
                onClick={handleOnSubmit}
                className="border w-full sm:w-auto flex gap-2"
              >
                <PlusIcon /> Add
              </Button>
            </Card>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {items.length <= 0 && (
            <EmptyAlert>
              Você ainda não tem nenhuma tarefa. Adicione alguma tarefa 🚀.
            </EmptyAlert>
          )}
          {items.map((item: any) => (
            <Todo item={item} action={handleUpdateTodo} key={item.id}>
              <Button
                variant="ghost"
                size="icon"
                className="p-2 rounded-full"
                onClick={() => handleDeleteTodo(item.id)}
              >
                <Trash2Icon className="size-4" />
              </Button>
            </Todo>
          ))}
        </div>
        {totalItemsTodo <= 0 ? null : <Footer total={totalItemsTodo} />}
      </Card>
    </main>
  );
}
