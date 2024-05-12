import React from "react";
import TodoItem from "../todo-item";
import { Item } from "../../types/item";
import styles from "./styles.module.css";

type TodoListProps = {
  items: Item[];
  updateTodos: (todos: Item[]) => void;
};

const TodoList: React.FC<TodoListProps> = ({ items, updateTodos }) => {
  const markItem = (item: Item) => {
    const updatedItems = items.map((todo) => {
      if (todo.id === item.id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    updateTodos(updatedItems);
  };

  const onDeleteItem = (item: Item) => {
    const updatedTodos = items.filter((todo) => todo.id !== item.id);
    updateTodos(updatedTodos);
  };
  return (
    <div className={styles.container}>
      <div className={styles.item_wrapper}>
        {items.map((item, index) => (
          <TodoItem
            key={`${item.id}-${index}`}
            item={item}
            onClick={markItem}
            deleteTodo={onDeleteItem}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
