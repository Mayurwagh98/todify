

interface TodoProps{
  todo:string,
  setTodo:React.Dispatch<React.SetStateAction<string>>,
  handleAddTodo:(e:React.FormEvent) => void
}

const InputField = ({todo, setTodo,handleAddTodo}:TodoProps) => {
  return <form className="w-full h-16" onSubmit={handleAddTodo}>
    <input type="text" placeholder="Enter your todo" value={todo} onChange={(e) => setTodo(e.target.value)}/>
    <button>Go</button>
  </form>;
};

export default InputField;
