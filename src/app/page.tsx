"use client";

import { TodoType } from "@/data/@types/todo.type";
import { useTodos } from "@/hooks/useTodos";

import { Card } from "@/components/ui/card";
import { Footer } from "@/components/footer";
import { TodoItem } from "@/components/todo-item";
import { EmptyAlert } from "@/components/empty-alert";
import { Todo } from "@/components/todo";
import { AddTodo } from "@/components/add-todo";
import { useFilter } from "@/hooks/useFilter";

const Home = () => {
  const { items, addTodo, removeTodo, markIsDone } = useTodos();
  const { applyFilter, setFilter } = useFilter();

  const totalItemsTodo = items.length;

  return (
    <main className="flex min-h-screen flex-col items-center p-6 gap-4 bg-gradient-to-b from-sky-400 to-indigo-700">
      <h1 className="text-4xl font-extrabold">TODO.App</h1>
      <Card className="w-full flex flex-col space-y-8 md:w-[670px] p-6 bg-slate-100">
        <div className="flex gap-4 items-center">
          <div className="w-full flex gap-2">
            <AddTodo onAddTodo={addTodo} />
          </div>
        </div>
        <Todo>
          <>
            {applyFilter(items).length <= 0 && (
              <EmptyAlert>
                Você ainda não tem nenhuma tarefa. Adicione alguma tarefa 🚀.
              </EmptyAlert>
            )}

            {applyFilter(items).map((item: any) => (
              <TodoItem
                key={item.id}
                item={item}
                onDelete={removeTodo}
                onDone={markIsDone}
              />
            ))}
          </>
        </Todo>
        {totalItemsTodo <= 0 ? null : (
          <Footer
            total={totalItemsTodo}
            onFilterAll={() => setFilter("all")}
            onFilterDone={() => setFilter("donse")}
            onFilterUndone={() => setFilter("undone")}
          />
        )}
      </Card>
    </main>
  );
};

export default Home;
