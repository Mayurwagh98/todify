const SingleTodo = ({ todo }: { todo: string }) => {
  return (
    <div className="w-1/2 m-2 p-2 rounded-lg bg-orange-500 flex justify-between items-center shadow-xl">
      <div className="w-1/2">
        <li className="m-2 p-2 list-none">{todo}</li>
      </div>
      <div></div>
    </div>
  );
};

export default SingleTodo;
