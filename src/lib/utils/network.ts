type URLObject = {
  didFetch: boolean;
  html?: string;
  promise?: Promise<string>;
  errored: boolean;
};

const urls: Record<string, URLObject> = {};

export function fetchURL(url: string, cache = urls) {
  if (cache[url]) return;
  cache[url] = {
    didFetch: false,
    errored: false,
    promise: fetch(url)
      .then((resp) => resp.text())
      .then((html) => {
        urls[url].didFetch = true;
        urls[url].html = html;
        return html;
      })
      .catch((error) => {
        console.error(error);
        if(!urls[url]) {
          urls[url] = {
            errored: true,
            didFetch: true,
            html: "",
            promise: new Promise((resolve) => resolve(""))
          }
        } else {
          urls[url].errored = true;
          urls[url].didFetch = true;
        }
        return "";
      }),
  };
}

export function getURLContent(
  url: string,
  cache = urls
): Promise<string | undefined> {
  if (!cache[url])
    throw new Error(`Couldn't find url: ${url} in saved records!`);
  return new Promise<string | undefined>((resolve) => {
    if (cache[url].didFetch) resolve(cache[url].html);

    resolve(cache[url].promise?.then(() => cache[url].html));
  });
}
