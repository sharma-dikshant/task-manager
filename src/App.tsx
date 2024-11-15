import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { TODO } from "./model";
//TODO fix this error
import TodoList from "./components/TodoList";

function App(): JSX.Element {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<TODO[]>([]);

  const handleAdd = (e: React.FormEvent):void => {
    e.preventDefault();

    if (todo) {
      setTodoList([...todoList, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  return (
    <div className="App">
      <span className="heading">taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
