import app from "./_app";
import { useState } from "react";

import { Button } from "./components/Button";
import { Title } from "./components/Title";

export default function Home() {
  const [todoText, setTodoText] = useState("");
  const [IncompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText) {
      const newIncompleteTodos = [...IncompleteTodos, todoText];
      setIncompleteTodos(newIncompleteTodos);
      setTodoText("");
    }
  };
  const onClickDelete = (i) => {
    const newIncompleteTodos = [...IncompleteTodos];
    newIncompleteTodos.splice(i, 1);
    setIncompleteTodos(newIncompleteTodos);
  };

  const onClickComplete = (i) => {
    const newIncompleteTodos = [...IncompleteTodos];
    newIncompleteTodos.splice(i, 1);

    const newCompleteTodos = [...completeTodos, IncompleteTodos[i]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (i) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(i, 1);

    const newIncompleteTodos = [...IncompleteTodos, completeTodos[i]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <div>
      <div className="bg-cyan-200 w-[400px] p-2 m-2 rounded-lg">
        <input
          placeholder="TODOを入力"
          className="rounded-2xl outline-none py-1 px-4"
          value={todoText}
          onChange={onChangeTodoText}
          disabled={IncompleteTodos.length >= 5}
        />
        <Button onClick={onClickAdd}>追加</Button>
      </div>
      {IncompleteTodos.length >= 5 && (
        <h1 className="text-red-400 bg-black w-[400px] text-center">
          5個以上は追加できません!
        </h1>
      )}
      <div className="bg-green-200 w-[400px] min-h-[200px] rounded-lg p-2 m-2">
        <Title>未完了のTODO</Title>
        <ul>
          {IncompleteTodos.map((todo, i) => (
            <li key={todo} className="flex items-center pb-2">
              <p>{todo}</p>
              <Button onClick={() => onClickComplete(i)}>完了</Button>
              <Button onClick={() => onClickDelete(i)}>削除</Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-yellow-200 w-[400px] min-h-[200px] rounded-lg p-2 m-2">
        <Title>完了のTODO</Title>
        <ul>
          {completeTodos.map((todo, i) => (
            <li key={todo} className="flex items-center pb-2">
              <p>{todo}</p>
              <Button onClick={() => onClickBack(i)}>戻す</Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
