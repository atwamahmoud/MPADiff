import { getTitleFromHtml } from "./utils/common";
import { LinksObserver } from "./utils/LinksObserver";
import { fetchURL, getURLContent } from "./utils/network";
import { isHrefSameHost } from "./utils/URL";

const MPA_ATTRIBUTE_EVENT_LISTENER = "data-mpa-diff-added-listener";
const MBA_ATTRIBUTE_TRUE = "true";
class MPADiff {
  private observer = new LinksObserver();
  private static instance: MPADiff | undefined = undefined;
  private constructor() {
    this.observer.init(this.handleLinksChange.bind(this));
    window.onpopstate = this.handlePopState.bind(this);
  }

  static init(): void {
    if ((window as any).MPADiffInstance) return;
    if (this.instance) return;
    this.instance = new MPADiff();
    (window as any).MPADiffInstance = this.instance;
    return;
  }

  private handlePopState(e: PopStateEvent) {
    this.updateHTML(e.state.html);
  }

  private updateHTML(html: string) {
    document.getElementsByTagName("html")[0].innerHTML = html;
  }

  private updateBrowserHistory(html: string, href: string, title: string) {
    history.pushState({ html }, title, href);
  }

  private addListener(link: HTMLAnchorElement) {
    console.log(link, "aa");
    fetchURL(link.href);
    link.addEventListener("click", (e) => {
      e.preventDefault();

      getURLContent(link.href).then((html) => {
        this.updateHTML(html);
        this.updateBrowserHistory(html, link.href, getTitleFromHtml(html));
      });

      return false;
    });
    link.setAttribute(MPA_ATTRIBUTE_EVENT_LISTENER, MBA_ATTRIBUTE_TRUE);
  }

  private handleLinksChange(links: HTMLAnchorElement[]) {
    for (const link of links) {
      if (link.getAttribute(MPA_ATTRIBUTE_EVENT_LISTENER) === MBA_ATTRIBUTE_TRUE) continue;
      if (!isHrefSameHost(link.href)) continue;
      this.addListener(link);
    }
  }
}
export default MPADiff;
