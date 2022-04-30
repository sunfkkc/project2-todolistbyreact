import React from "react";

function DeleteBtn({ todos, item, setTodos }) {
  function deleteTodo(evt) {
    setTodos(
      todos
        .filter((todo) => todo.id !== item.id)
        .map((todo, i) => {
          todo.id = i;
          return todo;
        })
    );
  }
  return <button onClick={deleteTodo}>삭제</button>;
}

export default DeleteBtn;
