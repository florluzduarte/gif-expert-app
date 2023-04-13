import { getGifs } from "../../src/helpers/getGifs.js";

describe("Testing getGifs() function", () => {
  test("getGifs() should return an array of Gifs", async () => {
    const gifsTest = await getGifs("Sailor moon");
    expect(gifsTest.length).toBeGreaterThan(0);
    expect(gifsTest[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
