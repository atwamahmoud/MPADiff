type CallbackType = (links: HTMLAnchorElement[]) => void;

export class LinksObserver {
  private callback: CallbackType = () => {};
  private defaultDelay = 300;
  private delay: number = this.defaultDelay;
  private linksHTML: string[] = [];

  setCallback(callback: CallbackType) {
    this.callback = callback;
  }

  setDelay(delay: number) {
    this.delay = delay;
    this.defaultDelay = delay;
  }

  private didChange(links: HTMLAnchorElement[]) {
    if (links.length !== this.linksHTML.length) return true;
    const seenLinks: Record<string, number> = {}; //link => count

    for (const linkHTML of this.linksHTML) {
      seenLinks[linkHTML] = 0;
    }

    for (const link of links) {
      const countSeen = seenLinks[link.outerHTML];
      if (countSeen === undefined) return true;
    }
  }

  private timedHandler() {
    const links = Array.from(document.getElementsByTagName("a"));
    if (!this.didChange(links)) {
      window.setTimeout(() => this.timedHandler(), this.delay);
      return;
    } else {
      this.delay = this.defaultDelay;
    }
    this.linksHTML = links.map((link) => link.outerHTML);

    this.callback(links);
    window.setTimeout(() => this.timedHandler(), this.delay);
  }

  init(callback: CallbackType, delay = this.delay) {
    this.setDelay(delay);
    this.setCallback(callback);
    this.timedHandler();
  }
}
