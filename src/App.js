import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Clicks | {count}</button>
      <h2>previous count: {prevCount.current}</h2>
    </div>
  );
}

export default App;
