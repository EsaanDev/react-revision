import React, { useState } from "react";
import EventHandling from "./event-handling/EventHandling";
import Child from "./component-composition/Child";
import ListsKeys from "./component-composition/ListsKeys";
import TodoList from "./component-composition/TodoList";
import ConditionalRender from "./component-composition/ConditionalRender";

const App = () => {
  const [message, setMessage] = useState("This is component composition.");

  const updateMessage = (newMsg) => {
    setMessage(newMsg);
  };

  return (
    <div className="bg-green-200 items-center text-center">
      <EventHandling />

      <hr />

      {/* COMPONENT COMPOSITION */}
      <h1 className="text-2xl mb-4">Parent Component</h1>

      <h2>Message: {message}</h2>

      <Child onUpdateMessage={updateMessage} />

      <hr />

      {/* LISTS AND KEYS */}

      <h1 className="text-2xl mb-4">LISTS AND KEYS</h1>
      <ListsKeys />

      <h1 className="text-2xl mb-3">Todo List</h1>
      <TodoList />

      <h1 className="text-2xl mb-2 mt-3">Conditional Rendering</h1>
      <ConditionalRender />
      <hr />
    </div>
  );
};

export default App;
