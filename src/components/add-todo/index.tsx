"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";

import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

import { TodoType } from "@/data/@types/todo.type";
import { randomId } from "@/helpers/randomId";

type AddTodoType = {
  onAddTodo: (item: TodoType) => void;
};

export const AddTodo = ({ onAddTodo }: AddTodoType) => {
  const TodoSchema = z.object({
    description: z.string().min(2, { message: "Insira alguma tarefa" }),
  });

  const form = useForm<z.infer<typeof TodoSchema>>({
    resolver: zodResolver(TodoSchema),
    defaultValues: {
      description: "",
    },
  });

  const onSubmit = (data: any) => {
    const newTodo: TodoType = { id: randomId(), ...data, done: false };
    onAddTodo(newTodo);
    form.reset();
  };

  return (
    <Form {...form}>
      <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <Card className="w-full flex flex-col gap-4 p-4 items-center sm:flex-row focus-within:ring focus-visible:ring-offset-1 focus-within:ring-black">
              <FormItem className="w-full">
                <div className="w-full flex flex-col gap-2 relative">
                  <div className="flex w-full">
                    <FormControl>
                      <Input
                        {...field}
                        name="description"
                        className="w-full p-0 border-transparent focus:outline-none focus:rounded-none focus:border-none focus-visible:ring-0"
                        placeholder="Adicionar tarefa"
                      />
                    </FormControl>
                    <Button
                      id="form-todo"
                      onClick={form.handleSubmit(onSubmit)}
                      className="border w-full sm:w-auto flex gap-2"
                    >
                      <PlusIcon /> Add
                    </Button>
                  </div>
                  <FormMessage />
                </div>
              </FormItem>
            </Card>
          )}
        />
      </form>
    </Form>
  );
};
