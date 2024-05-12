import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import TodoList from "./components/todo-list";
import { Item } from "./types/item";
import AddTodo from "./components/add-todo";
import Header from "./components/header";

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

  const addNewItem = (text: string) => {
    const id = Math.random();
    const newTodo = { id, text: text, checked: false };
    const updateItems = [newTodo, ...todos];
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

  const deleteItem = (item: Item) => {
    const updatedItems = todos.filter((todoItem) => todoItem.id !== item.id);
    setTodos(updatedItems);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <TodoList
          items={todos}
          removeItem={deleteItem}
          changeItemStatus={updateItemStatus}
        />
        <AddTodo onAdd={addNewItem} />
      </div>
    </div>
  );
}

export default App;
