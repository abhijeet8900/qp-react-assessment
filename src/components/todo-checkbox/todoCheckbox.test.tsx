import React from "react";
import { render, screen } from "@testing-library/react";
import TodoCheckBox from "./";

test("Renders unchecked checkbox", () => {
  render(<TodoCheckBox checked={false} />);
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Renders checked checkbox", () => {
  render(<TodoCheckBox checked={true} />);
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).toBeChecked();
});
