function isAbsoluteURL(url: string) {
  return (
    url.startsWith("http") || url.startsWith("https") || url.startsWith("//")
  );
}

export function isHrefSameHost(href: string): boolean {
  if (isAbsoluteURL(href)) return isHrefSameHostAbsolute(href);
  return true;
}

function getHost(href: string) {
  return href.split("//").pop().split("/").shift();
}

function isHrefSameHostAbsolute(href: string): boolean {
  return getHost(href) === getHost(window.location.origin);
}

export function getPath(href: string): string {
  return href;
}
