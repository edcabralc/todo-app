import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { TodoType } from "@/data/@types/todo.type";
import { Button } from "../ui/button";
import { Trash2Icon } from "lucide-react";

type TodoCardType = {
  item: TodoType;
  onDelete: (id: string) => void;
  onDone: (id: string) => void;
};

export const TodoItem = ({ item, onDelete, onDone }: TodoCardType) => {
  const { done, id, description } = item;

  return (
    <Card className="w-full flex gap-2 border p-4 hover:bg-slate-300">
      <div className="w-full flex gap-4 flex-1 items-center">
        <Checkbox
          name="isDone"
          checked={done}
          onCheckedChange={() => onDone(id)}
          className={`ml-2 ${done ? "text-gray-400" : ""}`}
        />
        <p className={done ? "text-gray-400" : ""}>{description}</p>
      </div>
      <>
        <Button
          variant="ghost"
          size="icon"
          className="p-2 rounded-full"
          onClick={() => onDelete(id)}
        >
          <Trash2Icon className="size-4" />
        </Button>
      </>
    </Card>
  );
};
