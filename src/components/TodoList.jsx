import React from 'react'
import SingleTodo from './SingleTodo'

function TodoList({ todos }) {
  return (
    todos.map((todo, i) => (
        <SingleTodo key={i} todo={todo} />
    ))
  )
}

export default TodoList