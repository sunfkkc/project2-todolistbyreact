import React from "react";

function CheckBox({ todos, item, setTodos }) {
  function onClickCkb(evt) {
    setTodos(
      todos.map((todo) => {
        if (item.id === todo.id) {
          todo.done = !todo.done;
          return todo;
        }
        return todo;
      })
    );
  }
  return item.done ? (
    <input type="checkbox" onClick={onClickCkb} checked />
  ) : (
    <input type="checkbox" onClick={onClickCkb} />
  );
}

export default CheckBox;
