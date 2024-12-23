

interface TodoProps{
  todo:string,
  setTodo:React.Dispatch<React.SetStateAction<string>>,
  handleAddTodo:(e:React.FormEvent) => void
}

const InputField = ({ todo, setTodo, handleAddTodo }: TodoProps) => {
  return (
    <form className="w-[95%] flex justify-center items-center relative" onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="Enter your todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="w-[85%] p-4 pr-16 rounded-lg shadow-lg outline-none" // Add padding-right for button space
      />
      <button
        type="submit"
        className="bg-blue-400 text-white absolute right-28 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-lg"
      >
        Go
      </button>
    </form>
  );
};

export default InputField;
