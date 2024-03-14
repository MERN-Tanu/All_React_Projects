import { useState } from "react";
import TodoList from "./TodoList";

function Todo() {
  const [add, setAdd] = useState("");
  const [item, setItem] = useState([]);
  function handleOnchange(e) {
    setAdd(e.target.value);
  }

  function addTodoHandler() {
    setItem([...item, add]);
  }

  return (
    <div>
      <h1>Todo App</h1>
      <br />
      <input
        value={add}
        placeholder="Add a new task.."
        onChange={(e) => handleOnchange(e)}
      />
      <button onClick={addTodoHandler}>Add Todo</button>
      <TodoList />
    </div>
  );
}

export default Todo;
