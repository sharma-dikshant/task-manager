import { TODO } from "../model";

interface Props {
  todo: TODO;
  todoList: TODO[];
  setTodoList: React.Dispatch<React.SetStateAction<TODO[]>>;
}
export default function TodoItem({
  todo,
  todoList,
  setTodoList,
}: Props): JSX.Element {
  const handleDone = (id: number): void => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number): void => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <span>
      <h3 style={{ textDecoration: `${todo.isDone ? "line-through" : ""}` }}>
        {todo.todo}
      </h3>
      <button onClick={() => handleDone(todo.id)}>done</button>
      <button onClick={() => handleDelete(todo.id)}>delete</button>
    </span>
  );
}
