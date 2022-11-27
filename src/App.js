import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY = "react-practice-todo-app";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);


  const changeHandler = (e) => setText(e.target.value);

  const submitHandler = () => {
    if(text === '') return;
    setTodos([...todos, { todo: text, complete: false }]) 
    setText("")
  };

  const clearHandler = () => setTodos([]);

  const deleteHandler = (todo) =>
    setTodos(todos.filter((item) => item !== todo));

  return (
    <>
      <TodoList todos={todos} deleteHandler={deleteHandler} />
      <input type="text" value={text} onChange={changeHandler} />
      <button style={{ margin: "5px" }} onClick={submitHandler}>
        ADD
      </button>
      <button onClick={clearHandler}>CLEAR</button>
      <div> {todos.length} to do left!</div>
    </>
  );
}

export default App;
