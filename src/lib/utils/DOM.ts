const STYLESHEET_SELECTOR = 'link[rel="stylesheet"]';

export function render(document: Document, htmlString: string) {
  const parser = new DOMParser();
  const newDOM = parser.parseFromString(htmlString, "text/html");

  const currentStyles: Record<string, number> = {};
  const newStyles: Record<string, number> = {};
  document
    .querySelectorAll(STYLESHEET_SELECTOR)
    .forEach((el: HTMLLinkElement, i) => {
      currentStyles[el.href] = i;
    });

  newDOM
    .querySelectorAll(STYLESHEET_SELECTOR)
    .forEach((el: HTMLLinkElement, i) => {
      newStyles[el.href] = i;
    });

  //Add styles that are not in currentStyles
  Object.keys(newStyles).forEach((href) => {
    if (currentStyles[href] === undefined) {
      const style = document.createElement("link");
      style.href = href;
      style.rel = "stylesheet";
      document.head.appendChild(style);
    }
  });
  //Remove styles that are not in newStyles
  Object.keys(currentStyles).forEach((href) => {
    if (newStyles[href] === undefined) {
      document
        .querySelectorAll(STYLESHEET_SELECTOR)
        [currentStyles[href]]?.remove();
    }
  });

  //Remove non style tags from current DOM
  document.head
    .querySelectorAll(`:not(${STYLESHEET_SELECTOR})`)
    .forEach((el) => {
      el.remove();
    });
  // Add non style tags to current dom that exists in the new DOM
  newDOM.head.querySelectorAll(`:not(${STYLESHEET_SELECTOR})`).forEach((el) => {
    document.head.appendChild(el.cloneNode(true));
  });

  // Replace body element...
  document.body.innerHTML = newDOM.body.innerHTML;
}
