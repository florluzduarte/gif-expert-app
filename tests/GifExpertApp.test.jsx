import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Testing <GifExpertApp />", () => {
  test("Testing input works correctly and input value can be modified", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "Sailor Moon" } });
    expect(input.value).toBe("Sailor Moon");
  });

  test("Form submit should alter state categories and render a new GifGrid", () => {
    render(<GifExpertApp />);
    const form = screen.getByRole("form");
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "Sailor Moon" } });
    expect(screen.getAllByRole("heading", { Level: 2 }).length).toBe(3);
    fireEvent.submit(form);
    expect(screen.getAllByRole("heading", { Level: 2 }).length).toBe(5);
  });
});
