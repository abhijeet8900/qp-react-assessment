import { fireEvent, render, screen } from "@testing-library/react";
import AddTodo from ".";

test("Renders input for todo", () => {
  render(<AddTodo onAdd={() => {}} />);

  expect(screen.getByRole("textbox")).toBeInTheDocument();
  expect(screen.getByRole("textbox").getAttribute("placeholder")).toBe(
    "Add a new todo"
  );
});

test("Renders button for adding todo", () => {
  render(<AddTodo onAdd={() => {}} />);

  expect(screen.getByRole("button")).toBeInTheDocument();
  expect(screen.getByRole("button").textContent).toBe("Add");
});

test("Triggers callback on add", () => {
  let todo = "";
  render(
    <AddTodo
      onAdd={(text) => {
        todo = text;
      }}
    />
  );

  const inputEle = screen.getByRole("textbox");
  fireEvent.change(inputEle, { target: { value: "Buy Coffee" } });
  screen.getByRole("button").click();
  expect(todo).toBe("Buy Coffee");
});
