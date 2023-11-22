import React from "react";
import { ToDoItemProps, TodoItem } from "./TodoItem";

type TodoItemListProps = {
  ListArray: Array<ToDoItemProps>;
};

const TodoItemList: React.FC<TodoItemListProps> = (
  props: TodoItemListProps
) => {
  return props.ListArray.map((data: ToDoItemProps, i) => {
    return <TodoItem key={i} {...data} />;
  });
};

export default TodoItemList;
