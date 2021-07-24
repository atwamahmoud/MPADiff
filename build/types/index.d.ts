declare type Config = {
    loaderDelay?: number;
    eagerLoading?: boolean;
    loaderElement?: Node;
};
declare class MPADiff {
    private observer;
    private static instance;
    private eagerLoading;
    private defaultLoaderDelay;
    private loaderElement;
    private static DEFAULT_CONFIG;
    private constructor();
    static init(config?: Config): void;
    static getInstance(): MPADiff;
    private handlePopState;
    private updateHTML;
    private updateBrowserHistory;
    private addListener;
    private handleLinksChange;
    setEagerLoading(eagerLoading: boolean): void;
    setLoader(loader: HTMLElement | Node): void;
    setDefaultLoaderDelay(delay: number): void;
}
export default MPADiff;
