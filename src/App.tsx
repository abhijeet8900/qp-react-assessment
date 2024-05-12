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

  const addTodo = (text: string) => {
    const id = Math.random();
    const newTodo = { id, text: text, checked: false };
    const updateItems = [newTodo, ...todos];
    setTodos(updateItems);
  };

  const updateTodos = (todos: Item[]) => {
    setTodos(todos);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
        <TodoList updateTodos={updateTodos} items={todos} />
        <AddTodo onAdd={addTodo} />
      </div>
    </div>
  );
}

export default App;
