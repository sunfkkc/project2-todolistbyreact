import React from "react";
import Todo from "./Todo";
function TodosList({ todos, setTodos }) {
  return todos.length !== 0 ? (
    <ul>
      {todos.map((item) => (
        <Todo item={item} todos={todos} setTodos={setTodos} />
      ))}
    </ul>
  ) : (
    <label>할 일이 없습니다.</label>
  );
}

export default TodosList;
