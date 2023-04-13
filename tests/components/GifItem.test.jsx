import { GifItem } from "../../src/components";
import { render, screen } from "@testing-library/react";

describe("<GifItem /> unit testing", () => {
  const title = "Sailor Moon";
  const url = "https://unicornio.dev/";

  test("Match with snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Check if alt and src properties from img tag are equal to title and url constants", () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("Check if title is render correctly", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
