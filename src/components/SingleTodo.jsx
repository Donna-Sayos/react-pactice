import React from 'react'

function SingleTodo({ todo }) {
  return (
    <div>
        <label>
            <input type="checkbox" checked={todo.complete} />
            {todo.name}
        </label>
    </div>
  )
}

export default SingleTodo