import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoForm } from "./TodoForm";
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  return (
    <div className="to">
      <TodoForm addTodo={addTodo} />
    </div>
  );
};
