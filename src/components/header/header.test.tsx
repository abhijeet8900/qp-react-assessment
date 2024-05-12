import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./";

test("Renders Header", () => {
  render(<Header />);
  const header = screen.getByText(/Todo App/i);
  expect(header).toBeInTheDocument();
});
