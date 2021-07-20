declare type CallbackType = (links: HTMLAnchorElement[]) => void;
export declare class LinksObserver {
    private callback;
    private defaultDelay;
    private delay;
    private linksHTML;
    setCallback(callback: CallbackType): void;
    setDelay(delay: number): void;
    private didChange;
    private timedHandler;
    init(callback: CallbackType, delay?: number): void;
}
export {};
