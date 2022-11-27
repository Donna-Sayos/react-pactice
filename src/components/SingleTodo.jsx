import React, {useState} from 'react'

function SingleTodo({ todo, deleteHandler }) {
    const [check, setCheck] = useState(false);

    const checkHandler = () => (
        todo.complete = true,
        setCheck(true)
    )

    // console.log('checked', check)
    // console.log('single todo', todo)
  return (
    <div>
        <label>
            <input type="checkbox" checked={todo.complete} onChange={checkHandler} />
            {todo.todo}
            <button 
            style={{ margin: "5px" }}
            onClick={() => deleteHandler(todo)}
            >x</button>
        </label>
    </div>
  )
}

export default SingleTodo