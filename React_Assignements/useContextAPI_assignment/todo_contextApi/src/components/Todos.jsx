import TodoProvider from "../TodoContextApi";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todos = () => {
  return (
    <TodoProvider>
      <div className="todo-container">
        <AddTodo />
      <TodoList />
      </div>
      
    </TodoProvider>
  );
};

export default Todos;
