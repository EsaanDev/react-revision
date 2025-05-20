import React from "react";

function TodoItem({ todo }) {
  return <li>{todo.text}</li>;
}

function TodoList({ todos }) {
  if (todos.length === 0) {
    return <p>No todos for today!</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

const ConditionalRender = () => {
  const todos = [
    {id: 1, text: "Mastry Frontend"},
    { id: 2, text: "Mastry Backend" }
]; // Try with 1 or 2 todos to test

  return (
    <div>
      <h1>My Todos</h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default ConditionalRender;
