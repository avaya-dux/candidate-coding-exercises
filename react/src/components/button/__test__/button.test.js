import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonComponent from "../ButtonComponent";

test("Button works", () => {
  render(<ButtonComponent />);
  const primaryButton = screen.getByRole("button", { Name: <button /> });
  expect(primaryButton).toHaveAttribute("data-testid");
});

test("Disabled button test", () => {
  render(<ButtonComponent />);
  const primaryButton = screen.getByRole("button", { Name: <button /> });
  expect(primaryButton).toHaveClass("neo-btn");
});
