import React from "react";
import { render, screen } from "@testing-library/react";
import TodoList from ".";
import { Item } from "../../types/item";

const MOCK_TODOS: Item[] = [
  {
    id: 1,
    text: "Buy Milk",
    checked: false,
  },
  {
    id: 2,
    text: "Walk Dog",
    checked: false,
  },
  {
    id: 3,
    text: "Book Movie",
    checked: false,
  },
  {
    id: 4,
    text: "Pay bills",
    checked: false,
  },
  {
    id: 5,
    text: "Research on NextJs",
    checked: false,
  },
];

test("Renders Todo items", () => {
  render(<TodoList items={MOCK_TODOS} updateTodos={(todos: Item[]) => {}} />);

  MOCK_TODOS.forEach((todo) => {
    expect(screen.getByText(todo.text)).toBeInTheDocument();
  });
});

test("Checks Todo items", () => {
  let updatedTodos: Item[] = MOCK_TODOS;
  render(
    <TodoList
      items={MOCK_TODOS}
      updateTodos={(todos: Item[]) => {
        updatedTodos = todos;
      }}
    />
  );

  expect(updatedTodos[0].checked).toBeFalsy();
  const todoToCheck = screen.getByText(MOCK_TODOS[0].text);
  todoToCheck.click();
  expect(updatedTodos[0].checked).toBeTruthy();
});

test("Removes Todo items", () => {
  let updatedTodos: Item[] = MOCK_TODOS;
  render(
    <TodoList
      items={MOCK_TODOS}
      updateTodos={(todos: Item[]) => {
        updatedTodos = todos;
      }}
    />
  );

  const todoToDelete = MOCK_TODOS[0];
  const todoToRemove = screen.getAllByTestId("delete-todo")[0];

  todoToRemove.click();
  expect(updatedTodos.includes(todoToDelete)).toBeFalsy();
});
