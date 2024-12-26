import { FiEdit3 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { Todo } from "../models/models";

interface props {
  todo: Todo;
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: props) => {
  const handleComplete = (id: number) => {
    console.log(todo);
    setTodos(
      todos?.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos?.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-1/2 m-2 p-2 rounded-lg bg-orange-500 flex justify-between items-center shadow-xl">
      <div className="w-1/2">
        <li
          className={`m-2 p-2 list-none text-white ${
            todo.isDone ? "line-through" : ""
          }`}
        >
          {todo.todo}
        </li>
      </div>
      <div className="flex justify-between items-center w-[15%] pr-2">
        <span>
          <FiEdit3 className="text-2xl cursor-pointer" />
        </span>
        <span onClick={() => handleDelete(todo.id)}>
          <MdDeleteOutline className="text-2xl cursor-pointer" />
        </span>

        <span onClick={() => handleComplete(todo.id)}>
          <IoMdDoneAll className="text-2xl cursor-pointer" />
        </span>
      </div>
    </div>
  );
};

export default SingleTodo;
