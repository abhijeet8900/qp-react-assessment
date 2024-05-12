import React from "react";
import TodoItem from "../todo-item";
import AddTodo from "../add-todo";
import { Item } from "../../types/item";
import styles from "./styles.module.css";

type TodoListProps = {
  items: Item[];
  addItem: (item: Item) => void;
  changeItemStatus: (item: Item) => void;
  removeItem: (item: Item) => void;
};

const TodoList: React.FC<TodoListProps> = ({
  items,
  addItem,
  changeItemStatus,
  removeItem,
}) => {
  const onAdd = (text: string) => {
    const id = Math.random();
    addItem({ id, text: text, checked: false });
  };
  const markItem = (item: Item) => {
    changeItemStatus(item);
  };
  const onDeleteItem = (item: Item) => {
    removeItem(item);
  };
  return (
    <div className={styles.container}>
      <div className={styles.item_wrapper}>
        {items.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            onClick={markItem}
            deleteTodo={onDeleteItem}
          />
        ))}
      </div>
      <AddTodo onAdd={onAdd} />
    </div>
  );
};

export default TodoList;
