function ChangeBtn({ todos, item, setTodos, changeTitle }) {
  function changeTodo(evt) {
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
  return (
    <button onClick={changeTodo} onKeyUp={changeTodo}>
      수정
    </button>
  );
}

export default ChangeBtn;
