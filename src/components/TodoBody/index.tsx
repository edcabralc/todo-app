import React from "react";

type TodoBody = {
  children: React.JSX.Element;
};

export const TodoBody = ({ children }: TodoBody) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};
