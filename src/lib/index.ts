import { getTitleFromHtml } from "./utils/common";
import { render } from "./utils/DOM";
import { LinksObserver } from "./utils/LinksObserver";
import { fetchURL, getURLContent } from "./utils/network";
import { isHrefSameHost } from "./utils/URL";

type Config = {
  loaderDelay?: number;
  eagerLoading?: boolean;
  loaderElement?: Node;
};

const MPA_ATTRIBUTE_EVENT_LISTENER = "data-mpa-diff-added-listener";
const MBA_ATTRIBUTE_TRUE = "true";
class MPADiff {
  private observer = new LinksObserver();
  private static instance: MPADiff | undefined = undefined;
  private eagerLoading = true;
  private defaultLoaderDelay = 500;
  private loaderElement: Node | undefined = undefined;
  private static DEFAULT_CONFIG: Config = {
    loaderDelay: 500,
    eagerLoading: true,
    loaderElement: undefined,
  };
  private constructor(config = MPADiff.DEFAULT_CONFIG) {
    this.defaultLoaderDelay =
      config.loaderDelay ?? MPADiff.DEFAULT_CONFIG.loaderDelay;
    this.eagerLoading =
      config.eagerLoading ?? MPADiff.DEFAULT_CONFIG.eagerLoading;
    this.loaderElement =
      config.loaderElement ?? MPADiff.DEFAULT_CONFIG.loaderElement;

    this.observer.init(this.handleLinksChange.bind(this));
    window.onpopstate = this.handlePopState.bind(this);
  }

  static init(config?: Config): void {
    if ((window as any).MPADiffInstance) return;
    if (MPADiff.instance) return;
    MPADiff.instance = new MPADiff(config);
    (window as any).MPADiffInstance = this.instance;
    return;
  }

  static getInstance(): MPADiff {
    if (!MPADiff.instance) {
      this.init();
    }
    return MPADiff.instance;
  }
  private handlePopState(e: PopStateEvent) {
    this.updateHTML(e.state.html);
  }

  private updateHTML(htmlString: string) {
    render(document, htmlString);
  }

  private updateBrowserHistory(html: string, href: string, title: string) {
    history.pushState({ html }, title, href);
  }

  private addListener(link: HTMLAnchorElement) {
    if (this.eagerLoading) {
      fetchURL(link.href);
    }
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let shouldRevertToDefaultBehaviour = false;

      if (this.loaderElement) {
        document.body.appendChild(this.loaderElement);
        this.loaderElement = this.loaderElement.cloneNode(true);
      }
      if (!this.eagerLoading) {
        fetchURL(link.href);
      }

      getURLContent(link.href).then((html) => {
        if (!html) {
          console.log("Received empty/undefined html value: ", html);
          console.log("Reverting to default behaviour");
          shouldRevertToDefaultBehaviour = true;
          return;
        }
        window.setTimeout(() => {
          this.updateHTML(html);
          this.updateBrowserHistory(html, link.href, getTitleFromHtml(html));
        }, this.defaultLoaderDelay);
      });

      if (shouldRevertToDefaultBehaviour) {
        window.location.href = link.href;
      }

      return false;
    });
    link.setAttribute(MPA_ATTRIBUTE_EVENT_LISTENER, MBA_ATTRIBUTE_TRUE);
  }

  private handleLinksChange(links: HTMLAnchorElement[]) {
    for (const link of links) {
      if (
        link.getAttribute(MPA_ATTRIBUTE_EVENT_LISTENER) ===
          MBA_ATTRIBUTE_TRUE ||
        (link.getAttribute("download") !== null &&
          link.getAttribute("download") !== undefined) ||
        (link.getAttribute("disabled") !== null &&
          link.getAttribute("disabled") !== undefined)
      )
        continue;
      if (!isHrefSameHost(link.href)) continue;
      this.addListener(link);
    }
  }

  setEagerLoading(eagerLoading: boolean) {
    this.eagerLoading = eagerLoading;
  }

  setLoader(loader: HTMLElement | Node) {
    this.loaderElement = loader.cloneNode(true);
  }

  setDefaultLoaderDelay(delay: number) {
    this.defaultLoaderDelay = delay;
  }
}
export default MPADiff;
