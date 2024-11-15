import { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export default function InputField({
  todo,
  setTodo,
  handleAdd,
}: Props): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form>
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter a task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            handleAdd(e);
            inputRef.current?.blur(); // this function shifts focus from the input field to the button
          }}
        >
          Go
        </button>
      </form>
    </div>
  );
}
