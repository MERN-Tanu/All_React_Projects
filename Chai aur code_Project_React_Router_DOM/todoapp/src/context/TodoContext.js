import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: " Todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},

  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// console.log("todovalue", TodoItems);

export const useTodo = () => {
  return useContext(TodoContext);
};

// console.log("usetodo", useTodo);s

export const TodoProvider = TodoContext.Provider;
