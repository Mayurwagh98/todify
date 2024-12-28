import React, { useState } from "react";
import "./App.css";
import InputField from "./Components/InputField";
import { Todo } from "./models/models";
import TodoList from "./Components/TodoList";
import DragDropList from "./Components/DragList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);
  const [activeCard, setActiveCard] = useState<string>("");

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="w-full h-full p-4">
      <h1 className="text-teal-400 text-3xl font-bold text-center mb-2">
        Todify
      </h1>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
        setActiveCard={setActiveCard}
      />
      <DragDropList />
    </div>
  );
};

export default App;
