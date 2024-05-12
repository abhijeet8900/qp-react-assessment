import React from "react";
import TodoItem from "../todo-item";
import { Item } from "../../types/item";
import styles from "./styles.module.css";

type TodoListProps = {
  items: Item[];
  changeItemStatus: (item: Item) => void;
  removeItem: (item: Item) => void;
};

const TodoList: React.FC<TodoListProps> = ({
  items,
  changeItemStatus,
  removeItem,
}) => {
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
    </div>
  );
};

export default TodoList;
