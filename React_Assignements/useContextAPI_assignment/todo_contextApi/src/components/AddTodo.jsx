import { useContext, useRef } from "react";
import { TodoContext } from "../TodoContextApi";

const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const inputRef = useRef();

  const handleAdd = () => {
    addTodo(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className="add-todo">
      <input type="text" ref={inputRef} placeholder="Enter todo" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;
