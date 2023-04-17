import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Testing the Custom Hook useFetchGifs()", () => {
  const testCategory = "Messi";

  test("Testing the initial state of the hook", () => {
    const { result } = renderHook(() => useFetchGifs(testCategory));
    const { gifs, isLoading } = result.current;
    expect(gifs.length).toBe(0);
    expect(isLoading).toBe(true);
  });

  test("Should return an array of gifs and isLoading should be false", async () => {
    const { result } = renderHook(() => useFetchGifs(testCategory));
    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));

    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
