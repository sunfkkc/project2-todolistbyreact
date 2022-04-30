import React, { useState } from "react";
import { getLocation } from "../model/util";
function InputForm({ todos, setTodos, setIsLoading }) {
  const [title, setTitle] = useState("");
  function getTitle(evt) {
    setTitle(evt.target.value);
  }
  async function addTodo(evt) {
    setIsLoading(true);
    const todo = {
      id: todos.length,
      title: title,
      location: await getLocation(),
      done: false,
      isChanging: false,
    };
    setIsLoading(false);
    setTodos([...todos, todo]);
  }
  return (
    <div className="content-body--modal--new">
      <input
        className="modal--new__input"
        type="text"
        placeholder="할 일을 입력해 주세요"
        onChange={getTitle}
      />
      <button className="btn modal--new__btn--submit" onClick={addTodo}>
        제출
      </button>
    </div>
  );
}

export default InputForm;
