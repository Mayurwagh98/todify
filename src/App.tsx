import React, { useState } from "react";
import "./App.css";
import InputField from "./Components/InputField"

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const handleAddTodo = (e:React.FormEvent) =>{
    e.preventDefault()
    console.log(todo)
  }
  return <div className="bg-slate-400 w-full h-full">
      <h1 className="text-teal-400 text-3xl font-bold text-center">Todify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo}/>
    </div>
};

export default App;
