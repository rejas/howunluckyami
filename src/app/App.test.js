import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  render(<App />);
});

test("renders headline", () => {
  render(<App />);
  const linkElement = screen.getByText(/How unlucky am I?/i);
  expect(linkElement).toBeInTheDocument();
});
