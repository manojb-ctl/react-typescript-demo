import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHanlder = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHanlder = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHanlder} />
      <Todos items={todos} onRemoveTodo={removeTodoHanlder} />
    </div>
  );
}

export default App;

// For TypeScript with Context API :-
// https://github.com/academind/react-complete-guide-code/tree/27-react-typescript/code/16-finished
