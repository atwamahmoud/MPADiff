declare class MPADiff {
    private observer;
    private static instance;
    private eagerLoading;
    private loaderElement;
    private currentLoaderCount;
    private constructor();
    static init(): void;
    private handlePopState;
    private updateHTML;
    private updateBrowserHistory;
    private addListener;
    private handleLinksChange;
    setEagerLoading(eagerLoading: boolean): void;
    setLoader(loader: HTMLElement | Node): void;
}
export default MPADiff;
