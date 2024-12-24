import { Todo } from "../models/models";
import SingleTodo from "./SingleTodo";

interface TodosProps {
  todos: Array<Todo>;
}

const TodoList = ({ todos }: TodosProps) => {
  return (
    <div className="flex flex-col justify-center items-center mt-2">
      {todos?.map((todo) => (
        <SingleTodo todo={todo.todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
