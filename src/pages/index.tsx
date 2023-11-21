import TodoForm from "@/components/TodoForm";
import { TodoItem } from "@/components/TodoItem";

const App = () => {
  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-3xl mb-2 text-center">My ToDo App</h1>
        <div>
          <h2 className="text-xl">ToDo List</h2>
          <TodoItem task="hogehoge"></TodoItem>
          <TodoItem task="higehige"></TodoItem>
          <TodoForm></TodoForm>
        </div>
      </div>
    </div>
  );
};

export default App;
