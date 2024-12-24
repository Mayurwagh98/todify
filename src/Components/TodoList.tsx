import { Todo } from "../models/models";

interface TodosProps{
    todos:Array<Todo>,
}

const TodoList = ({todos}:TodosProps) => {
    return (
        <div>
        {todos?.map((todo) =><li>{todo.todo}</li>)}
        </div>
    );
}

export default TodoList;
