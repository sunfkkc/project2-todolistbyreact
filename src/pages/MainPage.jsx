import { useEffect, useState } from "react";
import Header from "../components/Header";
import InputForm from "../components/InputForm";
import TodosList from "../components/TodosList";
import { Database } from "../model/database";
function MainPage() {
  const [todos, setTodos] = useState(Database.load());
  const [isShowList, setIsShowList] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    Database.save(todos);
  }, [todos]);
  return (
    <>
      <Header setIsShowList={setIsShowList} />

      {isShowList ? (
        <TodosList todos={todos} setTodos={setTodos} />
      ) : !isLoading ? (
        <InputForm
          todos={todos}
          setTodos={setTodos}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      ) : (
        <label>isLoading....</label>
      )}
    </>
  );
}

export default MainPage;
