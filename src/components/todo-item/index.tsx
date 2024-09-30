import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { TodoType } from "@/data/@types/todo.type";

type TodoCardType = {
  item: TodoType;
  action: (id: number) => void;
  children: React.JSX.Element;
};

export const TodoItem = ({ item, action, children }: TodoCardType) => {
  const { done, id, description } = item;

  return (
    <Card className="w-full flex gap-2 border p-4 hover:bg-slate-300">
      <div className="w-full flex gap-4 flex-1 items-center">
        <Checkbox
          name="isDone"
          checked={done}
          onCheckedChange={() => action(id)}
          className={`ml-2 ${done ? "text-gray-400" : ""}`}
        />
        <p className={done ? "text-gray-400" : ""}>{description}</p>
      </div>
      <>{children}</>
    </Card>
  );
};
