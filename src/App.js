import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [person, setPerson] = useState({ name: 'Bob' });
  const render = useRef(0);

  const handleClick = () => {
    setPerson({
      name: 'Bob'
    })
  }

  useEffect(() => {
    render.current = render.current + 1;
  });

  return (
    <div className="App">
      {person?.name}
      <button onClick={handleClick}>Clicks</button>
      <h2>render count: {render.current}</h2>
    </div>
  );
}

export default App;
