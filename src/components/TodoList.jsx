import React from 'react'
import SingleTodo from './SingleTodo'

function TodoList({ todos, deleteHandler }) {
  return (
    todos.map((todo, i) => (
        <SingleTodo key={i} todo={todo} deleteHandler={deleteHandler} />
    ))
  )
}

export default TodoList