import { useState } from "react";

function AddTo() {
  const [addTodo, setTodo] = useState("");

  function addHandler(e) {
    setTodo(e.target.value);
  }

  return (
    <div>
      <h1>Todo</h1>
      <input
        type="text"
        placeholder="Add your todod here"
        value={addTodo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addHandler}>Add ToDo</button>
    </div>
  );
}
export default AddTo;
