import React from "react";
import TodoItem from "../todo-item";
import AddTodo from "../add-todo";
import { Item } from "../../types/item";
import styles from './styles.module.css'

type TodoListProps = {
  items: Item[];
  addItem: (item: Item) => void;
  changeItemStatus: (item: Item) => void;
};

const TodoList: React.FC<TodoListProps> = ({
  items,
  addItem,
  changeItemStatus,
}) => {
  const onAdd = (text: string) => {
    const id = Math.random();
    addItem({ id, text: text, checked: false });
  };
  const markItem = (item: Item) => {
    changeItemStatus(item);
  };
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <TodoItem key={index} item={item} onClick={markItem} />
      ))}
      <AddTodo onAdd={onAdd} />
    </div>
  );
};

export default TodoList;
