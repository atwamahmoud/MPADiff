import { fetchURL, getURLContent } from "../utils/network";

beforeAll(() => {
  (global.fetch as any) = jest.fn(() =>
  Promise.resolve({
    text: () => Promise.resolve("html"),
  })
);
});

it("Adds a Cache entry", () => {
  const cache = {};
  const url = "https://example.com";
  fetchURL(url, cache);
  expect(cache[url]).not.toBeUndefined();
});
it("Doesn't recreate a cache entry when it already exists", () => {
  const url = "https://example.com";
  const cache: Record<string, any> = {
    [url]: true,
  };
  fetchURL(url, cache);
  expect(cache[url]).toBe(true);
});

it("Adds a correct cache entry", () => {
  const url = "https://example.com";
  const cache = {};
  fetchURL(url, cache);
  expect(cache[url].promise).toBeInstanceOf(Promise);
});

// Needs some more testing...

it("Throws an error when url is note defined in cache", () => {
  const url = "https://example.com";
  const cache = {};
  expect(() => getURLContent(url, cache)).toThrow();
});
it("Returns a promise", () => {
  const url = "https://example.com";
  const cache: Record<string, any> = {
    [url]: {},
  };
  expect(getURLContent(url, cache)).toBeInstanceOf(Promise);
});

it("Returns a promise that resolves to a string when a url is fetched", () => {
  const url = "https://example.com";

  const cache: Record<string, any> = {
    [url]: {
      html: "",
      didFetch: true,
    },
  };
  getURLContent(url, cache).then((html) => {
    console.log(html);
    expect(html).toBe("");
  });
});

it("Returns a promise that resolves to a string when a url is still fetching", () => {
  const url = "https://example.com";

  const cache: Record<string, any> = {
    [url]: {
      html: "",
      promise: new Promise((resolve) => resolve("")),
    },
  };
  getURLContent(url, cache).then((html) => {
    console.log(html);
    expect(html).toBe("");
  });
});
