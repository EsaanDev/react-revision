import React from 'react'

function TodoItem({todo}) {
  return <li>{todo.text}</li>
}


function TodoLists({todos}) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo}/>
      ))}
    </ul>
  )
}

const todos = [
  {id: 1, text: 'Study React'},
  {id: 2, text: 'Do homework'},
]

const TodoList = () => {
  return (
    <div>
      <TodoLists todos={todos} />
    </div>
  )
}

export default TodoList