import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/todo-list";
import { Item } from "./types/item";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addNewItem = (item: Item) => {
    const updateItems = [...items, item];
    setItems(updateItems);
  };

  const updateItemStatus = (item: Item) => {
    const updatedItems = items.map((todoItem) => {
      if (todoItem.id === item.id) {
        return { ...todoItem, checked: !todoItem.checked };
      }
      return todoItem;
    });
    setItems(updatedItems);
  };
  return (
    <div className="App bg-gray-100 h-screen w-screen">
      <TodoList
        items={items}
        addItem={addNewItem}
        changeItemStatus={updateItemStatus}
      />
    </div>
  );
}

export default App;
