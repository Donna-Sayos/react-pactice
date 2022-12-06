import { useState } from "react";
import SingleTodo from "./components/SingleTodo";

// const LOCAL_STORAGE_KEY = "react-practice-todo-app";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [visible, setVisible] = useState(true);

  const changeHandler = (e) => setText(e.target.value);

  const submitHandler = () => {
    if(text === '') return;
    setTodos([...todos, text]) 
    setText("")
  };

  const clearHandler = () => setTodos([]);

  const deleteHandler = (todo) =>
    setTodos(todos.filter((item) => item !== todo));

  const toggleVisible = () => {
    visible === true ? setVisible(false) : setVisible(true);
  }

  return (
    <div>
      <h4 style={{ textAlign: "center" }} >{todos.length} left to do!</h4>
      <input type="text" value={text} onChange={changeHandler} />
      <button style={{ margin: "5px" }} onClick={() => submitHandler()}>
        ADD
      </button>
      <button onClick={() => clearHandler()}>CLEAR</button>
      <button style={{ margin: "5px" }} onClick={() => toggleVisible()}>{visible ? "Hide" : "Show"}</button>
      {visible && todos.map((todo, i) => (
        <SingleTodo key={i} todo={todo} deleteHandler={deleteHandler} />
      ))}
    </div>
  )
};

export default App;
