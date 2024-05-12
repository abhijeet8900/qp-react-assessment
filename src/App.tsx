import React, { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/todo-list";
import { Item } from "./types/item";

function App() {
  const [todos, setTodos] = useState<Item[]>([]);

  // Load TODOs from local storage on app startup
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      setTodos(parsedTodos);
    }
  }, []);

  // Update local storage whenever TODOs change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addNewItem = (item: Item) => {
    const updateItems = [item, ...todos];
    setTodos(updateItems);
  };

  const updateItemStatus = (item: Item) => {
    const updatedItems = todos.map((todoItem) => {
      if (todoItem.id === item.id) {
        return { ...todoItem, checked: !todoItem.checked };
      }
      return todoItem;
    });
    setTodos(updatedItems);
  };
  return (
    <div className="App bg-gray-100 h-screen w-screen">
      <TodoList
        items={todos}
        addItem={addNewItem}
        changeItemStatus={updateItemStatus}
      />
    </div>
  );
}

export default App;
