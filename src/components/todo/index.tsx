import React from "react";

type Todo = {
  children: React.JSX.Element;
};

export const Todo = ({ children }: Todo) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};
