import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../Form/index.js";

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

test("submit button click calls the handleSubmit function", () => {
  const mockOnSubmit = jest.fn();
  render(<Form onSubmit={mockOnSubmit} />);

  const submitButton = screen.getByRole("button", { name: /submit/i });
  fireEvent.click(submitButton);

  expect(mockOnSubmit).toHaveBeenCalled();
});

test("date input should not allow future dates", () => {
  const { getByLabelText } = render(<Form />);

  const dateInput = getByLabelText("When:");

  const today = new Date().toISOString().split("T")[0];

  expect(dateInput).toHaveAttribute("max", today);
});
