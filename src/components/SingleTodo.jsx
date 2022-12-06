import React from 'react'
import './SingleTodo.css';

function SingleTodo({ todo, deleteHandler }) {
    
  return (
    <div>
        <ul className='todo' >
          <li>{todo}</li>
          <button style={{ margin: "5px" }} onClick={() => deleteHandler(todo)}>x</button>
        </ul>
    </div>
  )
};

export default SingleTodo;