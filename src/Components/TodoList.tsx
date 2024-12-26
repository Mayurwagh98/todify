import { Todo } from "../models/models";
import SingleTodo from "./SingleTodo";

interface TodosProps {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: TodosProps) => {
  return (
    <div className="flex justify-center items-center mt-2">
      <div className="w-1/2 m-2 p-2 rounded-md bg-teal-300 shadow-sm">
        <h2 className="text-center text-xl text-white">Active Tasks</h2>
        {todos?.map((todo) => (
          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
      <div className="w-1/2 m-2 p-2 rounded-md bg-green-400 shadow-sm">
        <h2 className="text-center text-xl text-white">Completed Tasks</h2>
        {todos?.map((todo) => (
          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
