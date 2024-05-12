import React from "react";
import TodoItem from "../todo-item";
import { Item } from "../../types/item";
import styles from "./styles.module.css";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  ListRowProps,
} from "react-virtualized";

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
      <AutoSizer>
        {({ width, height }) => (
          <List
            className={styles.item_wrapper}
            width={width}
            height={height}
            deferredMeasurementCache={cache}
            rowHeight={cache.rowHeight}
            rowCount={items.length}
            overscanRowCount={3}
            containerStyle={{ overflow: "unset", pointerEvents: "all" }}
            isScrolling={true}
            rowRenderer={(props) =>
              renderRow({ ...props, items, onDeleteItem, markItem })
            }
          />
        )}
      </AutoSizer>
    </div>
  );
};

const cache: CellMeasurerCache = new CellMeasurerCache({
  fixedWidth: true,
  defaultHeight: 100,
});

const renderRow: React.FC<
  ListRowProps & {
    items: Item[];
    markItem: (item: Item) => void;
    onDeleteItem: (item: Item) => void;
  }
> = ({ key, style, index, items, onDeleteItem, markItem, parent }) => {
  const item: Item = items[index];
  return (
    <CellMeasurer
      key={key}
      cache={cache}
      parent={parent}
      columnIndex={0}
      rowIndex={index}
    >
      <div style={{ ...style, minHeight: 61 }}>
        <TodoItem
          key={key}
          item={item}
          onClick={markItem}
          deleteTodo={onDeleteItem}
        />
      </div>
    </CellMeasurer>
  );
};

export default TodoList;
