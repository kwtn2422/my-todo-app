import TodoForm from "@/components/TodoForm";
import TodoItemList from "@/components/TodoItemList";
import { ToDoItemProps } from "@/components/TodoItem";

const todoItemList: ToDoItemProps[] = [
  { task: "hogehoge", status: "Done" },
  { task: "higehige", status: "Incomplete" },
];

const App = () => {
  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-3xl mb-2 text-center">My ToDo App</h1>
        <div>
          <h2 className="text-xl">ToDo List</h2>
          <TodoItemList ListArray={todoItemList}></TodoItemList>
          <TodoForm></TodoForm>
        </div>
      </div>
    </div>
  );
};

export default App;
