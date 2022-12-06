import React, {useState} from 'react'

function SingleTodo({ todo, deleteHandler }) {
    
  return (
    <div>
        <p style={{ display: "inline" }}>{todo}</p>
        <button style={{ margin: "5px" }} onClick={() => deleteHandler(todo)}>x</button>
    </div>
  )
}

export default SingleTodo