import React from "react";
import { render, screen } from "@testing-library/react";
import TodoItem from "./";
import { Item } from "../../types/item";

const MOCK_TODO: Item = {
  id: 1,
  text: "Buy Milk",
  checked: false,
};

let checked: boolean = false;
let isDeleted: boolean = false;

test("Renders Todo Text", () => {
  render(
    <TodoItem
      item={MOCK_TODO}
      deleteTodo={() => {
        isDeleted = true;
      }}
      onClick={() => {
        checked = !checked;
      }}
    />
  );
  const text = screen.getByText(/Buy Milk/i);
  expect(text).toBeInTheDocument();
});

test("Checks Todo Item", () => {
  render(
    <TodoItem
      item={MOCK_TODO}
      deleteTodo={() => {
        isDeleted = true;
      }}
      onClick={() => {
        checked = !checked;
      }}
    />
  );
  const text = screen.getByText(/Buy Milk/i);
  expect(text).toBeInTheDocument();
  text.click();
  expect(checked).toBeTruthy();
});

test("Deletes Todo Item", () => {
  render(
    <TodoItem
      item={MOCK_TODO}
      deleteTodo={() => {
        isDeleted = true;
      }}
      onClick={() => {
        checked = !checked;
      }}
    />
  );
  const deleteButton = screen.getByTestId("delete-todo");
  expect(deleteButton).toBeInTheDocument();
  deleteButton.click();
  expect(isDeleted).toBeTruthy();
});
