type URLObject = {
  didFetch: boolean;
  html?: string;
  promise?: Promise<string>;
  errored: boolean;
};

const urls: Record<string, URLObject> = {};

export function fetchURL(url: string) {
  if (urls[url]) return;
  urls[url] = {
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
        urls[url].errored = true;
        urls[url].didFetch = true;
        return "";
      }),
  };
}

export function getURLContent(url: string): Promise<string | undefined> {
  if (!urls[url])
    throw new Error(`Couldn't find url: ${url} in saved records!`);
  return new Promise<string | undefined>((resolve) => {
    if (urls[url].didFetch) resolve(urls[url].html);

    resolve(urls[url].promise?.then(() => urls[url].html));
  });
}
