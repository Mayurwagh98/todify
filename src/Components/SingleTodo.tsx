import { FiEdit3 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { Todo } from "../models/models";
import { useEffect, useRef, useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface props {
  index: number;
  todo: Todo;
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ index, todo, todos, setTodos }: props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editDefaultVal, setEditDefaultVal] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: index,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleComplete = (id: number) => {
    setTodos(
      todos?.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos?.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos?.map((todo) =>
        todo.id === id ? { ...todo, todo: editDefaultVal } : todo
      )
    );
    setEdit(false);
  };

  return (
    <div
      className="m-2 p-2 rounded-lg bg-orange-500 flex justify-between items-center shadow-xl"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <div className="w-1/2">
        {edit ? (
          <form onSubmit={(e) => handleEdit(e, todo.id)}>
            <input
              type="text"
              onChange={(e) => setEditDefaultVal(e.target.value)}
              ref={inputRef}
              value={editDefaultVal}
              className="m-2 p-2 list-none text-black outline-none rounded-sm"
            />
          </form>
        ) : (
          <li
            className={`m-2 p-2 list-none text-white ${
              todo.isDone ? "line-through" : ""
            }`}
          >
            {todo.todo}
          </li>
        )}
      </div>
      <div className="flex justify-between items-center w-[15%] pr-2">
        <span onClick={() => setEdit((prev) => !prev)}>
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
