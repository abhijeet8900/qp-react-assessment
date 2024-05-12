import { render, screen } from "@testing-library/react";
import DeleteTodo from ".";

test("Trigers callback on click", () => {
  let isDeleted = false;
  render(
    <DeleteTodo
      onClick={() => {
        isDeleted = true;
      }}
    />
  );

  expect(isDeleted).toBeFalsy();
  const ele = screen.getByTestId("delete-todo");
  ele.click();
  expect(isDeleted).toBeTruthy();
});
