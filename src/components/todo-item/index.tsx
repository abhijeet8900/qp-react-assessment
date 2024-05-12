import React from "react";
import { Item } from "../../types/item";
import styles from "./styles.module.css";
import TodoCheckbox from "../todo-checkbox";

type TodoItemProps = {
  item: Item;
  onClick: (item: Item) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ item, onClick }) => {
  const { text, checked, id } = item;
  return (
    <div
    id={id+''}
      className={styles.container}
      onClick={() => {
        onClick(item);
      }}
    >
      <TodoCheckbox checked={checked} />
      <span
        className={styles.text}
        style={{ textDecoration: checked ? "line-through" : "none" }}
      >
        {text}
      </span>
    </div>
  );
};

export default TodoItem;
