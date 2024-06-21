import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Todo as TodoItem } from "@/data/@types/todo.type";

type TodoType = {
  item: TodoItem;
  action: (id: number) => void;
  children: React.JSX.Element;
};

export const Todo = ({ item, action, children }: TodoType) => {
  return (
    <Card className="w-full flex gap-2 border p-4 hover:bg-slate-300">
      <div className="w-full flex gap-4 flex-1 items-center">
        <Checkbox
          name="isDone"
          checked={item.done}
          onCheckedChange={() => action(item.id)}
          className={`ml-2 ${item.done ? "text-gray-400" : ""}`}
        />
        <p className={item.done ? "text-gray-400" : ""}>{item.description}</p>
      </div>
      <>{children}</>
    </Card>
  );
};
