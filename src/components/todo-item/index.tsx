import React from "react";
import { Item } from "../../types/item";

type TodoItemProps = {
  item: Item;
  onClick: (item: Item) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ item, onClick }) => {
  const { text, checked } = item;
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          onClick(item);
        }}
      />
      <span style={{ textDecoration: checked ? "line-through" : "none" }}>
        {text}
      </span>
    </div>
  );
};

export default TodoItem;
