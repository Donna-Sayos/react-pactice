import { useState, useRef, useEffect } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([])
  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>ADD</button>
      <button>CLEAR</button>
      <div>0 to do left!</div>
    </>
  );
}

export default App;
