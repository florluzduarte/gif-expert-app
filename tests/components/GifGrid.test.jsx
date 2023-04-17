import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Testing <GifGrid />", () => {
  useFetchGifs.mockReturnValue({
    gifs: [],
    isLoading: true,
  });

  const testCategory = "Sailor Moon";

  test("Initial component state", () => {
    render(<GifGrid category={testCategory} />);
    expect(screen.getByText("Cargando imágenes..."));
    expect(screen.getByText(testCategory));
  });

  test("Should render images returned by useFetchGifs()", () => {
    const gifsTest = [
      {
        id: "ABC",
        title: "Goku",
        url: "https://localhost/goku.png",
      },
      {
        id: "123",
        title: "Ranma",
        url: "https://locahost/ranma.png",
      },
    ];

    useFetchGifs.mockReturnValue({
      gifs: gifsTest,
      isLoading: false,
    });

    render(<GifGrid category={testCategory} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
