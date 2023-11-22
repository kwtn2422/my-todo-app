import React from "react";
import { ToDoItemProps } from "./TodoItem";
import { TodoItem } from "./TodoItem";

type TodoItemListProps = {
  ListArray: Array<ToDoItemProps>;
};

const TodoItemList: React.FC<TodoItemListProps> = ({ ListArray }) => {
  return ListArray.map((task: ToDoItemProps, i) => {
    return <TodoItem key={i} {...task} />;
  });
};

export default TodoItemList;
