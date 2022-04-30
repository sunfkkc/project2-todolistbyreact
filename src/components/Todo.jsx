import React, { useState } from "react";
import ChangeBtn from "./ChangeBtn";
import CheckBox from "./CheckBox";
import DeleteBtn from "./DeleteBtn";

function Todo({ item, todos, setTodos }) {
  const [changeTitle, setChangeTitle] = useState(item.title);
  function getTitle(evt) {
    setChangeTitle(evt.target.value);
  }
  function changeTodo(evt) {
    if (evt.key === "Enter") {
      setTodos(
        todos.map((todo) => {
          if (item.id === todo.id) {
            todo.isChanging = !todo.isChanging;
            todo.title = changeTitle;
            return todo;
          }
          return todo;
        })
      );
    }
  }
  return item.isChanging ? (
    <li key={item.id}>
      <input
        type="text"
        value={changeTitle}
        onChange={getTitle}
        autoFocus
        onKeyUp={changeTodo}
      />{" "}
      -{item.location}
      <CheckBox todos={todos} item={item} setTodos={setTodos} />
      <ChangeBtn
        todos={todos}
        item={item}
        setTodos={setTodos}
        changeTitle={changeTitle}
      />
      <DeleteBtn todos={todos} item={item} setTodos={setTodos} />
    </li>
  ) : (
    <li key={item.id}>
      {item.title} - {item.location}
      <CheckBox todos={todos} item={item} setTodos={setTodos} />
      <ChangeBtn
        todos={todos}
        item={item}
        setTodos={setTodos}
        changeTitle={changeTitle}
      />
      <DeleteBtn todos={todos} item={item} setTodos={setTodos} />
    </li>
  );
}

export default Todo;
