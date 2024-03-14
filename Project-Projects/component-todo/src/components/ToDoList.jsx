import { useState } from "react";

function createInitialTodo() {
  const initialTodo = [];
  for (let i = 0; i < 50; i++) {
    initialTodo.push({ id: i, text: "item" + (i + 1) });
    console.log(initialTodo);
  }

  return initialTodo;
}

function ToDoList() {
  const [todos, setTodos] = useState(createInitialTodo);
  const [text, setText] = useState("");

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />

      <button
        onClick={() => {
          setText("");
          setTodos([{ id: todos.length, text: text }, ...todos]);
        }}>
        AddTodo
      </button>

      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.text}
            {/* {item.date} */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
