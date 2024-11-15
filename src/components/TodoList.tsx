import { TODO } from "../model";
import TodoItem from "./TodoItem";

interface Props {
  todoList: TODO[];
  setTodoList: React.Dispatch<React.SetStateAction<TODO[]>>;
}
export default function TodoList({
  todoList,
  setTodoList,
}: Props): JSX.Element {
  return (
    <div>
      {todoList.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
}
