import { Todo } from "../models/models";
import SingleTodo from "./SingleTodo";

interface TodosProps {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: TodosProps) => {
  return (
    <div className="flex flex-col justify-center items-center mt-2">
      {todos?.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
