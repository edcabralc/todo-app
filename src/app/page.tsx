"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { PlusIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState<string>("");
  const [isDone, setIsDone] = useState<any>(false);

  const totalItemsTodo = items.length;

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    const newTodo = { description, done: false, id: Date.now() };
    console.log(newTodo);
    handleAddTodoItems(newTodo);
    setDescription("");
  };

  const handleAddTodoItems = (item: any) => {
    setItems((items): any => [...items, item]);
  };

  const handleDeleteTodo = (id: any) => {
    setItems((items: any) => items.filter((item: any) => item.id !== id));
  };

  const handleUpdateTodo = (id: any) => {
    setItems((items: any) =>
      items.map((item: any) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
    console.log(items);
  };

  const formatText = (total: any) => {
    return `Você tem ${
      total >= 0 && total < 9 ? `0${total}` : `${total}`
    } tarefa${total > 1 ? "s" : ""}`;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-b from-sky-400 to-indigo-700">
      <Card className="flex flex-col space-y-8 w-[670px] p-6 bg-slate-100">
        <div className="flex gap-4 items-center">
          <div className="w-full flex gap-2">
            <Card className="w-full flex p-4 items-center focus-within:ring focus-visible:ring-offset-1 focus-within:ring-black">
              <div className="w-full flex flex-col gap-2 relative">
                <Input
                  type="text"
                  name="addTodo"
                  className="w-full border-transparent focus:outline-none focus:rounded-none focus:border-none focus-visible:ring-0"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  placeholder="Adicionar tarefa"
                />
              </div>
              <Button onClick={handleOnSubmit} className="border flex gap-2">
                <PlusIcon /> Add
              </Button>
            </Card>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {items.length <= 0 && (
            <p className="py-8 text-center">
              Você ainda não tem nenhuma tarefa. Adicione alguma tarefa 🚀.
            </p>
          )}
          {items.map((item: any, i) => (
            <Card className="flex gap-2 border p-4 hover:bg-slate-300" key={i}>
              <div className="flex gap-4 flex-1 items-center">
                <Checkbox
                  name="isDone"
                  value={isDone}
                  onChange={() => handleUpdateTodo(item.id)}
                  className={isDone ? "text-gray-400" : ""}
                />
                <p className={isDone ? "text-gray-400" : ""}>
                  {item.description}
                </p>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="p-2 rounded-full"
                onClick={() => handleDeleteTodo(item.id)}
              >
                <Trash2Icon className="size-4" />
              </Button>
            </Card>
          ))}
        </div>
        {totalItemsTodo <= 0 ? null : (
          <>
            <Separator />
            <div className="flex justify-between">
              <div>
                <p>{formatText(totalItemsTodo)}</p>
              </div>
              <div className="flex gap-4">
                <Button variant={"link"}>All</Button>
                <Button variant={"link"}>Done</Button>
                <Button variant={"link"}>Undone</Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </main>
  );
}
