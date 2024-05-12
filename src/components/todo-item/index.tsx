import React from "react";
import { Item } from "../../types/item";
import styles from "./styles.module.css";
import TodoCheckbox from "../todo-checkbox";
import DeleteTodo from "../delete-todo";

type TodoItemProps = {
  item: Item;
  onClick: (item: Item) => void;
  deleteTodo: (item: Item) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ item, onClick, deleteTodo }) => {
  const { text, checked, id } = item;
  return (
    <div className={styles.wrapper} id={id + ""}>
      <div
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
      <DeleteTodo
        onClick={() => {
          deleteTodo(item);
        }}
      />
    </div>
  );
};

export default TodoItem;
